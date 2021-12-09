require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan rifle night proud gesture pet swap ghost'; 
let testAccounts = [
"0x890a8fd4233badf2251a35ca232ca9ac8879c759ed119a6030cb8a631ad675a3",
"0x21272911ce600d2f7c29c0971e78d34c0a02a7e1598c75611f4cbe78ed2de54e",
"0x5382504740e1a4080ceee9bc5d66f57df14dc0cfd388874d1f845c4be1d771e5",
"0x915fbb32e43037cb7991604ff0507fc26a82a99426affba6a489d2c232a31096",
"0x86ac03767c8541b29d70e979aa7d1508148cfd205238461e86b5839f81305def",
"0xf27cc3b6c368d64092d5d720f06f2139c15587dbb833d16d095dc5c5b6c233fb",
"0x7aff27a870244ba4887906f16ed9716b90f3cfdf9b984cb223ab5838e9909369",
"0x648f83888e7d5ade5a4b0ce502b1e872d7c68486512c753c3ae9e783f7255ca9",
"0x16a8dbd5e9f9b02eeed6fce92f98f4120801519798503f6bf4d3f01cec33cb64",
"0x829251e79f07dc325b14fd545e70476e9447f7a1cbac9d2ea9da4dc807c2e317"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


