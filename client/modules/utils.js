function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString();
}

function formatSatoshis(satoshis) {
  const bitcoin = satoshis / 100000000;
  return `${bitcoin.toFixed(8)} BTC`;
}

function formatAddress(address) {
  return `${address.slice(0, 6)}...${address.slice(-6)}`;
}

export { formatTimestamp, formatSatoshis, formatAddress };
