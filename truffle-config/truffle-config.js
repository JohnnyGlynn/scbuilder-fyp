const privKey = "33a296a55a1c1c824eea84a47de150ed5674172e7da33c4bf1e5b6d4f4a8625b"
const PrivateKeyProvider = require("truffle-privatekey-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    "ropsten-infura": {
      provider: () => new PrivateKeyProvider(privKey ,"https://ropsten.infura.io/v3/416152c41ffc4419bdca07b05162b689"),
      network_id: 3,
      gas: 1100000
    }
  }
};