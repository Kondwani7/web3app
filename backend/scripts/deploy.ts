import { ethers } from "hardhat";

async function main() {


  const Mint = await ethers.getContractFactory("Mint");
  const mint = await Mint.deploy('Minter', 'Mint')

  await mint.deployed()

  console.log(`Mint deployed to:${mint.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
