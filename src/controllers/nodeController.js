const NodeModel = require("../models/nodeModel");
const { forkscanner } = require("../config/forkscanner");
const { wallet } = require("../config/wallet");

exports.getIndex = async (req, res) => {
  try {
    // Get node data from Forkscanner
    const nodes = await forkscanner.getNodes();
    
    // Get balance data from Wallet
    const address = wallet.getAddress();
    const balance = await wallet.getBalance(address);

    // Render the view with node and balance data
    res.render("nodeView", { nodes, balance });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
