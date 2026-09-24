const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

// Pulls the OpenAPI specs listed at the BigCommerce docs index into `reference/`,
// using scripts/reference-map.json to keep the existing file names (which drive
// the generated class names).
//
// map entries:
//   "source.yaml": "target.yml"                 copy as-is
//   "source.yaml": { "target.yml": [prefixes] } split paths by prefix (first match wins)
//   "source.yaml": null                         skip
//
// usage: node scripts/pull-references.js [--from <dir with downloaded specs>]

const basePath = process.cwd();
const referencePath = path.join(basePath, 'reference');
const map = JSON.parse(fs.readFileSync(path.join(basePath, 'scripts/reference-map.json'), 'utf8'));
const sourceBase = map.source.replace(/[^/]+$/, '');

const fromIndex = process.argv.indexOf('--from');
const fromDir = fromIndex > -1 ? process.argv[fromIndex + 1] : null;

async function fetchText(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`${url}: HTTP ${response.status}`);
    }

    return response.text();
}

async function readSource(name) {
    if (fromDir) {
        return fs.readFileSync(path.join(fromDir, name), 'utf8');
    }

    return fetchText(`${sourceBase}openapi/${name}`);
}

// strip the `/stores/{store_hash}/v3` part so prefixes match the API path
function apiPath(specPath) {
    return specPath.replace(/^\/stores\/\{[^}]+\}\/v\d+/, '');
}

function collectRefs(node, refs) {
    if (Array.isArray(node)) {
        node.forEach((item) => collectRefs(item, refs));
    } else if (node && typeof node === 'object') {
        for (const [key, value] of Object.entries(node)) {
            if (key === '$ref' && typeof value === 'string' && value.startsWith('#/')) {
                refs.add(value);
            } else {
                collectRefs(value, refs);
            }
        }
    }

    return refs;
}

// keep only the components reachable from the given paths
function pruneComponents(spec) {
    const components = spec.components || {};
    const kept = {};
    const pending = [...collectRefs(spec.paths, new Set())];
    const seen = new Set();

    while (pending.length > 0) {
        const ref = pending.pop();
        if (seen.has(ref)) {
            continue;
        }
        seen.add(ref);

        // #/components/<type>/<key>
        const [, root, type, key] = ref.split('/');
        if (root !== 'components' || !components[type] || components[type][key] === undefined) {
            continue;
        }

        const value = components[type][key];
        kept[type] = kept[type] || {};
        kept[type][key] = value;
        pending.push(...collectRefs(value, new Set()));
    }

    // security schemes are referenced by name, not by $ref
    if (components.securitySchemes) {
        kept.securitySchemes = components.securitySchemes;
    }

    return { ...spec, components: kept };
}

function split(name, contents, targets) {
    const spec = yaml.parse(contents, { maxAliasCount: -1 });
    const buckets = Object.fromEntries(Object.keys(targets).map((target) => [target, {}]));

    for (const [specPath, details] of Object.entries(spec.paths || {})) {
        const target = Object.keys(targets)
            .find((key) => targets[key].some((prefix) => apiPath(specPath).startsWith(prefix)));

        if (!target) {
            console.warn(`  ! ${name}: ${specPath} matches no target, skipped`);
            continue;
        }

        buckets[target][specPath] = details;
    }

    return Object.entries(buckets).map(([target, paths]) => [
        target,
        yaml.stringify(pruneComponents({ ...spec, paths }), { lineWidth: 0, aliasDuplicateObjects: false }),
    ]);
}

async function main() {
    const index = fromDir ? null : await fetchText(map.source);
    if (index) {
        const listed = new Set([...index.matchAll(/href="openapi\/([^"]+)"/g)].map((match) => match[1]));

        for (const name of listed) {
            if (!(name in map.files)) {
                console.warn(`! ${name} is listed at ${map.source} but not in reference-map.json`);
            }
        }

        for (const name of Object.keys(map.files)) {
            if (!listed.has(name)) {
                console.warn(`! ${name} is in reference-map.json but no longer listed at ${map.source}`);
            }
        }
    }

    for (const [name, target] of Object.entries(map.files)) {
        if (target === null) {
            continue;
        }

        const contents = await readSource(name);
        const outputs = typeof target === 'string'
            ? [[target, contents]]
            : split(name, contents, target);

        for (const [file, output] of outputs) {
            fs.mkdirSync(path.dirname(path.join(referencePath, file)), { recursive: true });
            fs.writeFileSync(path.join(referencePath, file), output);
            console.log(`${name} -> reference/${file}`);
        }
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
