const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    [
      'Tesla',
      'Microsoft',
      'Google',
      'Amazon',
      'Netflix',
      'Facebook',
      'Twitter',
      'Paypal',
    ],
    [
      'https://imgur.com/KnmcGTM',
      'https://imgur.com/LBTUAAm',
      'https://imgur.com/0BtR2vn',
      'https://imgur.com/LnSB4AE',
      'https://imgur.com/Ouwh8Ss',
      'https://imgur.com/wdDSJsQ',
      'https://imgur.com/Fg1B9Pn',
      'https://imgur.com/tL702vI',
    ],
    [911, 2321, 1842, 1689, 294, 915, 49, 282], //market cap in billion
    [41, 168, 220, 443, 27, 102, 4, 23] //2021 revenue in billions
  );
  await gameContract.deployed();
  console.log('Contract deployed to:', gameContract.address);

  let txn;

  txn = await gameContract.mintCharacterNFT(7);
  await txn.wait();

  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log('Token URI', returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
