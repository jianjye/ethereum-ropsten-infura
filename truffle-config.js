require('dotenv').config();
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
		development: {
			// from: "", // Defaults to first address from Ganache
		  host: "127.0.0.1", 
		  port: 7545,
		  network_id: "*"
		},
		"ropsten-infura": {
			provider: () => new HDWalletProvider(process.env.TEST_MNEMONIC, "https://ropsten.infura.io/"+process.env.INFURA_KEY, 0),
			network_id: 3,
			gas: 4700000,
			gasPrice: 100000000000
		}
  }
};
