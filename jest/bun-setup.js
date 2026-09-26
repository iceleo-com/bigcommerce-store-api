// bun test doesn't run jest's globalSetup, map require('@jest/globals') or define the `jest` global,
// so bunfig.toml preloads this instead
import * as bunTest from 'bun:test';
import globalSetup from './global-setup.js';

bunTest.mock.module('@jest/globals', () => bunTest);
globalThis.jest = bunTest.jest;

await globalSetup();
