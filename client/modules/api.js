import axios from 'axios';

/**
 * This module contains functions for making API requests to the server.
 */

/**
 * Makes a GET request to retrieve a list of nodes.
 * @returns {Promise} Promise object representing the list of nodes.
 */
export const getNodes = async () => {
  try {
    const response = await axios.get('/api/nodes');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * Makes a POST request to create a new node.
 * @param {Object} node - The node object to be created.
 * @returns {Promise} Promise object representing the created node.
 */
export const createNode = async (node) => {
  try {
    const response = await axios.post('/api/nodes', node);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * Makes a PUT request to update an existing node.
 * @param {Object} node - The node object to be updated.
 * @returns {Promise} Promise object representing the updated node.
 */
export const updateNode = async (node) => {
  try {
    const response = await axios.put(`/api/nodes/${node.id}`, node);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * Makes a DELETE request to delete an existing node.
 * @param {Number} id - The id of the node to be deleted.
 * @returns {Promise} Promise object representing the deleted node.
 */
export const deleteNode = async (id) => {
  try {
    const response = await axios.delete(`/api/nodes/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
