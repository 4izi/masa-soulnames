export const config = {
    mainWalletPrivateKey: 'd41200692fdcc9014afe60c829411106123c22fd8bf166a724e35303adb3323f',
    ethPerWallet: 0.15, // increase this value if transactions fails because the gasPrice is too high
    transferToMain: true, // if true, eth wil be trasfered back to the main wallet after mint
    retryAfterCrash: false // set to true if script failed after sending ETH to accounts
};
