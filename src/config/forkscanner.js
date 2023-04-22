const forkscanner = require('forkscanner');

// Set up Forkscanner configuration
const config = {
  nodes: [
    {
      name: 'node1',
      url: 'http://localhost:8332',
      user: 'username',
      pass: 'password'
    },
    {
      name: 'node2',
      url: 'http://localhost:8333',
      user: 'username',
      pass: 'password'
    }
  ],
  interval: 5000 // 5 seconds
};

// Create a Forkscanner instance
const scanner = forkscanner(config);

// Start monitoring
scanner.on('block', (data) => {
  console.log(`New block ${data.block.height} on node ${data.node.name}`);
});

scanner.on('tx', (data) => {
  console.log(`New transaction ${data.txid} on node ${data.node.name}`);
});

scanner.start();
