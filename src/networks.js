// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
var coins = require('./coins')

const networks = {
  dash: {
    messagePrefix: '\x19DarkCoin Signed Message:\n',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x4c, // https://dash-docs.github.io/en/developer-reference#opcodes
    scriptHash: 0x10,
    wif: 0xcc,
    coin: coins.DASH
  },
  dashTest: {
    messagePrefix: '\x19DarkCoin Signed Message:\n',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x8c, // https://dash-docs.github.io/en/developer-reference#opcodes
    scriptHash: 0x13,
    wif: 0xef, // https://github.com/dashpay/godashutil/blob/master/wif.go#L72
    coin: coins.DASH
  },
  bitcoincash: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
    coin: coins.BCH,
    forkId: 0x00
  },
  bitcoincashTestnet: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
    coin: coins.BCH
  },
  bitcoinsv: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
    coin: coins.BSV,
    forkId: 0x00
  },
  bitcoinsvTestnet: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
    coin: coins.BSV
  },
  zcash: {
    messagePrefix: '\x18ZCash Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x1cb8,
    scriptHash: 0x1cbd,
    wif: 0x80,
    // This parameter was introduced in version 3 to allow soft forks, for version 1 and 2 transactions we add a
    // dummy value.
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    coin: coins.ZEC
  },
  zcashTest: {
    messagePrefix: '\x18ZCash Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x1d25,
    scriptHash: 0x1cba,
    wif: 0xef,
    consensusBranchId: {
      1: 0x00,
      2: 0x00,
      3: 0x5ba81b19,
      4: 0x76b809bb
    },
    coin: coins.ZEC
  },
  bitcoingold: {
    messagePrefix: '\x18Bitcoin Gold Signed Message:\n',
    bech32: 'btg',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x26,
    scriptHash: 0x17,
    wif: 0x80,
    coin: coins.BTG,
    forkId: 0x4F /* 79 */
  },
  litecoin: {
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bech32: 'ltc',
    bip32: {
      public: 0x019da462,
      private: 0x019d9cfe
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0,
    coin: coins.LTC
  },
  litecoinTest: {
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bech32: 'tltc',
    bip32: {
      public: 0x043587CF,
      private: 0x04358394
    },
    pubKeyHash: 0x6F,
    scriptHash: 0x3a,
    wif: 0xef,
    coin: coins.LTC
  },
  bitcoin: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
    coin: coins.BTC
  },
  testnet: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
    coin: coins.BTC
  },
  dogecoin: {
    messagePrefix: '\x18Dogecoin Signed Message:\n',
    bip32: {
      public: 0x02facafd,
      private: 0x02fac398
    },
    pubKeyHash: 0x1e,
    scriptHash: 0x16,
    wif: 0x9e,
    dustThreshold: 0,
    coin: coins.DOGECOIN,
  },
  dogecoinTest: {
    messagePrefix: '\x18Dogecoin Testnet Signed Message:\n',
    bip32: {
      public: 0x02facafd,
      private: 0x02fac398
    },
    pubKeyHash: 0x71,
    scriptHash: 0xc4,
    wif: 0xf1,
    dustThreshold: 0,
    coin: coins.DOGECOIN,
  },
  hOdlcoin: {
    messagePrefix: '\x18H0dlcoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4
    },
    pubKeyHash: 0x28,
    scriptHash: 0x05,
    wif: 0xa8,
    coin: coins.HODLCOIN
  },
  bitcoingoldTestnet: {
    messagePrefix: '\x18BitcoinGold Testnet Signed Message:\n',
    bip32: {
      public: 0x043587CF,
      private: 0x04358394
    },
    pubKeyHash: 0x6F,
    scriptHash: 0xC4,
    wif: 0xEF,
    coin: coins.BTG,
  },
  emercoin: {
    messagePrefix: '\x18Emercoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4
    },
    pubKeyHash: 0x21,
    scriptHash: 0x5C,
    wif: 0x80,
    coin: coins.EMERCOIN,
  },
  emercoinTestnet: {
    messagePrefix: '\x18Emercoin Testnet Signed Message:\n',
    bip32: {
      public: 0x043587CF,
      private: 0x04358394
    },
    pubKeyHash: 0x6F,
    scriptHash: 0xC4,
    wif: 0xEF,
    coin: coins.EMERCOIN,
  },
  viacoin: {
    messagePrefix: '\x18Viacoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4
    },
    pubKeyHash: 0x47,
    scriptHash: 0x21,
    wif: 0xC7,
    coin: coins.VIACOIN,
  },
  viacoinTestnet: {
    messagePrefix: '\x18Viacoin Testnet Signed Message:\n',
    bip32: {
      public: 0x043587CF,
      private: 0x04358394
    },
    pubKeyHash: 0x7F,
    scriptHash: 0xC4,
    wif: 0xFF,
    coin: coins.VIACOIN,
  },
  namecoin: {
    messagePrefix: '\x18Namecoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4
    },
    pubKeyHash: 0x34,
    scriptHash: 0xD,
    wif: 0xB4,
    coin: coins.NAMECOIN,
  },
  namecoinTestnet: {
    messagePrefix: '\x18Namecoin Testnet Signed Message:\n',
    bip32: {
      public: 0x043587CF,
      private: 0x04358394
    },
    pubKeyHash: 0x6F,
    scriptHash: 0xC4,
    wif: 0xEF,
    coin: coins.NAMECOIN,
  },
  digibyte: {
    messagePrefix: '\x18Digibyte Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4
    },
    pubKeyHash: 0x1E,
    scriptHash: 0x3F,
    wif: 0x80,
    coin: coins.DIGIBYTE,
  },
  digibyteTestnet: {
    messagePrefix: '\x18Digibyte Testnet Signed Message:\n',
    bip32: {
      public: 0x043587CF,
      private: 0x04358394
    },
    pubKeyHash: 0x7E,
    scriptHash: 0x8C,
    wif: 0xFE,
    coin: coins.DIGIBYTE,
  },
  komodo: {
    messagePrefix: '\x18Komodo Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4
    },
    pubKeyHash: 0x3C,
    scriptHash: 0x55,
    wif: 0xBC,
    coin: coins.KOMODO,
  },
  komodoTestnet: {
    messagePrefix: '\x18Komodo Testnet Signed Message:\n',
    bip32: {
      public: 0x043587CF,
      private: 0x04358394
    },
    pubKeyHash: 0x0,
    scriptHash: 0x5,
    wif: 0x80,
    coin: coins.KOMODO,
  }
};

Object.keys(networks).forEach(networkId => {
  networks[networkId].isTestnet = networkId.includes('Test') 
    || networkId.includes('Testnet') 
    || networkId === 'testnet';
});

module.exports = networks;