require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    url: "https://eth-goerli.g.alchemy.com/v2/V610bkskduBprhMiG5bLi9dQE-bLt1rp",
    accounts: [
      c50d8686f871b319916463e35066fcf890af4fad087b7026d3c3bdd1e5c6369d,
    ],
  },
};

