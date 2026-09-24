const fs = require('fs');
const path = require('path');
const readline = require('readline');

const credentialsPath = path.resolve(__dirname, '../bigcommerce-credentials.json');

module.exports = async () => {
    if (fs.existsSync(credentialsPath)) {
        const { storeHash, accessToken } = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));

        if (storeHash && accessToken) {
            console.log(`Using credentials from ${path.basename(credentialsPath)}`);
            process.env.STORE_HASH = storeHash;
            process.env.ACCESS_TOKEN = accessToken;
            return;
        }
    }

    await new Promise((resolve) => {
        console.log('Please provide store hash and access token');

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        let storeHash = '';
        let accessToken = '';

        rl.question('Enter store hash: ', (storeHashInput) => {
            storeHash = storeHashInput;

            rl.question('Enter access token: ', (accessTokenInput) => {
                accessToken = accessTokenInput;

                rl.close();
            });
        });

        rl.on('close', () => {
            process.env.STORE_HASH = storeHash;
            process.env.ACCESS_TOKEN = accessToken;
            resolve();
        });
    });
};
