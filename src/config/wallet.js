const bitcoin = require('bitcoin-core');

const wallet = new bitcoin({
  network: 'regtest',
  username: 'your-username',
  password: 'your-password',
  port: 18443,
  timeout: 30000,
  ssl: {
    enabled: true,
    strict: true,
    host: 'localhost'
  }
});

module.exports = wallet;
