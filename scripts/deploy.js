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
      'https://imgur.com/KnmcGTM.png',
      'https://imgur.com/LBTUAAm.png',
      'https://imgur.com/0BtR2vn.png',
      'https://imgur.com/LnSB4AE.png',
      'https://imgur.com/Ouwh8Ss.png',
      'https://imgur.com/wdDSJsQ.png',
      'https://imgur.com/Fg1B9Pn.png',
      'https://imgur.com/tL702vI.png',
    ],
    [911, 2321, 1842, 1689, 294, 915, 49, 282], //market cap in billion
    [41, 168, 220, 443, 27, 102, 4, 23] //2021 revenue in billions
  );
  await gameContract.deployed();
  console.log('Contract deployed to:', gameContract.address);

  let txn;

  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log('Minted NFT #1: \n', 'Token URI', returnedTokenUri);

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log('Minted NFT #2: \n', 'Token URI', returnedTokenUri);
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
