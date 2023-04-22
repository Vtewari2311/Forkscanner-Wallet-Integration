class NodeModel {
    constructor(ip, port) {
      this.ip = ip;
      this.port = port;
    }
  
    async getStatus() {
      // Code to get node status from Forkscanner
      const status = await forkscanner.getNodeStatus(this.ip, this.port);
      return status;
    }
  
    async getTransactions(address) {
      // Code to get transactions for a specific address from Forkscanner
      const transactions = await forkscanner.getTransactionsByAddress(this.ip, this.port, address);
      return transactions;
    }
  }
  
  module.exports = NodeModel;
  