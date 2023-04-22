const { forkscanner } = require("../config/forkscanner");

class NodeModel {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  /**
   * Get the status of the node.
   * @returns {Promise<Object>} - The node's status information.
   */
  async getStatus() {
    try {
      const status = await forkscanner.getNodeStatus(this.ip, this.port);
      return status;
    } catch (error) {
      console.error(`Error getting node status for ${this.ip}:${this.port}: ${error}`);
      throw error;
    }
  }

  /**
   * Get the transactions associated with a given address from the node.
   * @param {string} address - The address to get transactions for.
   * @returns {Promise<Array<Object>>} - An array of transaction objects associated with the given address.
   */
  async getTransactions(address) {
    try {
      const transactions = await forkscanner.getTransactionsByAddress(this.ip, this.port, address);
      return transactions;
    } catch (error) {
      console.error(`Error getting transactions for address ${address} from node ${this.ip}:${this.port}: ${error}`);
      throw error;
    }
  }
}

module.exports = NodeModel;

  