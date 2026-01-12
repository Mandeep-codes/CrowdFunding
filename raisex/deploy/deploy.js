const { Wallet } = require("zksync-ethers");
const { Deployer } = require("@matterlabs/hardhat-zksync-deploy");

module.exports = async function (hre) {
  // 1. Initialize the wallet
  const wallet = new Wallet(process.env.PRIVATE_KEY);

  // 2. Create deployer object
  const deployer = new Deployer(hre, wallet);

  // 3. Load the contract artifact
  const artifact = await deployer.loadArtifact("CrowdFunding");

  // 4. Deploy the contract (add constructor args in the array if needed)
  const contract = await deployer.deploy(artifact, []);

  console.log(`Contract deployed to: ${await contract.getAddress()}`);
};