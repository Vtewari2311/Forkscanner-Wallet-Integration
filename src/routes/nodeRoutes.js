const express = require('express');
const router = express.Router();

// Import controller functions
const {
  getIndex,
  getNodeStatus,
  getAddressTransactions
} = require('../controllers/nodeController');

// Route for displaying a list of all available nodes
router.get('/', getIndex);

// Route for displaying the status of a specific node
// Example URL: /nodes/127.0.0.1/8333/status
router.get('/:ip/:port/status', getNodeStatus);

// Route for displaying transactions for a specific address on a specific node
// Example URL: /nodes/127.0.0.1/8333/transactions/1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
router.get('/:ip/:port/transactions/:address', getAddressTransactions);

module.exports = router;


