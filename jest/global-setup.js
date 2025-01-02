const readline = require('readline');

module.exports = async () => {
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
