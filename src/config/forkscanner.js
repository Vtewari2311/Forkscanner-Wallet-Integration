const request = require('request');

// Set up Forkscanner configuration
const config = {
    nodes: [{
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

// Create a Forkscanner class
class Forkscanner {
    constructor(config) {
        this.nodes = config.nodes;
        this.interval = config.interval;
        this.lastBlocks = {};
        this.lastTxs = {};
    }

    // Get the height of the latest block for a given node
    async getLastBlockHeight(node) {
        return new Promise((resolve, reject) => {
            const options = {
                url: node.url,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                auth: {
                    user: node.user,
                    pass: node.pass
                },
                body: JSON.stringify({
                    jsonrpc: '1.0',
                    id: 'getBlockCount',
                    method: 'getblockcount',
                    params: []
                })
            };

            request(options, (err, res, body) => {
                if (err) {
                    reject(err);
                } else if (res.statusCode !== 200) {
                    reject(new Error(`Unexpected status code: ${res.statusCode}`));
                } else {
                    const response = JSON.parse(body);
                    if (response.error) {
                        reject(new Error(`Error from node ${node.name}: ${response.error.message}`));
                    } else {
                        resolve(response.result);
                    }
                }
            });
        });
    }

    // Get the hash of the latest block for a given node
    async getLastBlockHash(node) {
        return new Promise((resolve, reject) => {
            const options = {
                url: node.url,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                auth: {
                    user: node.user,
                    pass: node.pass
                },
                body: JSON.stringify({
                    jsonrpc: '1.0',
                    id: 'getLastBlockHash',
                    method: 'getbestblockhash',
                    params: []
                })
            };

            request(options, (err, res, body) => {
                if (err) {
                    reject(err);
                } else if (res.statusCode !== 200) {
                    reject(new Error(`Unexpected status code: ${res.statusCode}`));
                } else {
                    const response = JSON.parse(body);
                    if (response.error) {
                        reject(new Error(`Error from node ${node.name}: ${response.error.message}`));
                    } else {
                        resolve(response.result);
                    }
                }
            });
        });
    }

    // Get the latest block data for a given node
    async getLastBlock(node) {
        const height = await this.getLastBlockHeight(node);
        const hash = await this.getLastBlockHash(node);
        return {
            height,
            hash
        };
    }

    // Get the transaction data for a given transaction ID and node
    async getTx(txid, node) {
        return new Promise((resolve, reject) => {
            const options = {
                url: node.url,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                auth: {
                    user: node.user,
                    pass: node.pass
                },
                body: JSON.stringify({
                    jsonrpc: '1.0',
                    id: '1',
                    method: 'gettransaction',
                    params: [txid]
                })
            };

            request(options, (error, response, body) => {
                if (error) {
                    reject(error);
                } else if (response.statusCode !== 200) {
                    reject(`Request failed with status code ${response.statusCode}`);
                } else {
                    const txData = JSON.parse(body);
                    resolve(txData.result);
                }
            });
        });
    }


    // Scan for forks
    async scan() {
        console.log(`Starting fork scan at ${new Date().toLocaleString()}`);
        for (const node of this.nodes) {
            try {
                const block = await this.getLastBlock(node);
                const txs = await this.getTxsInBlock(block.hash, node);
                if (this.lastBlocks[node.name]) {
                    // Check for block height mismatch
                    if (this.lastBlocks[node.name].height !== block.height) {
                        console.log(`Fork detected for node ${node.name} at block height ${block.height}`);
                        // Get transactions from both blocks
                        const lastTxs = this.lastTxs[node.name] || [];
                        const newTxs = txs.filter(tx => !lastTxs.includes(tx));
                        console.log(`New transactions in fork: ${newTxs.join(', ')}`);
                    }
                }
                // Update last blocks and transactions
                this.lastBlocks[node.name] = block;
                this.lastTxs[node.name] = txs;
            } catch (err) {
                console.error(`Error scanning node ${node.name}: ${err}`);
            }
        }
        console.log(`Finished fork scan at ${new Date().toLocaleString()}`);
    }

    // Get the transaction IDs in a block for a given node
    async getTxsInBlock(blockHash, node) {
        return new Promise((resolve, reject) => {
            const options = {
                url: node.url,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                auth: {
                    user: node.user,
                    pass: node.pass
                },
                body: JSON.stringify({
                    jsonrpc: '1.0',
                    id: '1',
                    method: 'getblock',
                    params: [blockHash, 1]
                })
            };

            request(options, (error, response, body) => {
                if (error) {
                    reject(error);
                } else if (response.statusCode !== 200) {
                    reject(`Request failed with status code ${response.statusCode}`);
                } else {
                    const blockData = JSON.parse(body);
                    const txids = blockData.result.tx.map(tx => tx.txid);
                    resolve(txids);
                }
            });
        });
    }
}
// Export the Forkscanner class
module.exports = Forkscanner;
module.exports = config;
