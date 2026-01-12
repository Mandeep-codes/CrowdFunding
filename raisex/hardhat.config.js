require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import("hardhat/config").HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  defaultNetwork: "hardhat",

  networks: {
    hardhat: {},

    sepolia: {
      url: "https://rpc.ankr.com/eth_sepolia",
      accounts: process.env.PRIVATE_KEY
        ? [`0x${process.env.PRIVATE_KEY}`]
        : [],
      chainId: 11155111,
    },
  },
};
