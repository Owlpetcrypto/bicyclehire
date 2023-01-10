const hre = require("hardhat");

async function main() {

  const BicycleHire = await hre.ethers.getContractFactory("BicycleHire");
  const bicycleHire = await BicycleHire.deploy();

  await bicycleHire.deployed();

  console.log(
    `Greeter deployed to: `, bicycleHire.address
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
