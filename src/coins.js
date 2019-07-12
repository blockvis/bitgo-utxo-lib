// Coins supported by bitgo-bitcoinjs-lib
const typeforce = require('typeforce')

const coins = {
  BCH: 'bch',
  BSV: 'bsv',
  BTC: 'btc',
  BTG: 'btg',
  LTC: 'ltc',
  ZEC: 'zec',
  DASH: 'dash',
  DOGECOIN: 'dogecoin',
  HODLCOIN: 'hOdlcoin',
  VIACOIN: 'viacoin',
  EMERCOIN: 'emercoin',
  NAMECOIN: 'namecoin',
}

coins.isBitcoin = function (network) {
  return typeforce.value(coins.BTC)(network.coin)
}

coins.isBitcoinCash = function (network) {
  return typeforce.value(coins.BCH)(network.coin)
}

coins.isBitcoinSV = function (network) {
  return typeforce.value(coins.BSV)(network.coin)
}

coins.isBitcoinGold = function (network) {
  return typeforce.value(coins.BTG)(network.coin)
}

coins.isDash = function (network) {
  return typeforce.value(coins.DASH)(network.coin)
}

coins.isLitecoin = function (network) {
  return typeforce.value(coins.LTC)(network.coin)
}

coins.isZcash = function (network) {
  return typeforce.value(coins.ZEC)(network.coin)
}

coins.isDogecoin = function(network) {
  return typeforce.value(coins.DOGECOIN)(network.coin);
};

coins.isHodlcoin = function(network) {
  return typeforce.value(coins.HODLCOIN)(network.coin);
};

coins.isEmercoin = function(network) {
  return typeforce.value(coins.EMERCOIN)(network.coin);
};

coins.isViacoin = function(network) {
  return typeforce.value(coins.VIACOIN)(network.coin);
};

coins.isNamecoin = function(network) {
  return typeforce.value(coins.NAMECOIN)(network.coin);
};


coins.isValidCoin = typeforce.oneOf(
  coins.isBitcoin,
  coins.isBitcoinCash,
  coins.isBitcoinSV,
  coins.isBitcoinGold,
  coins.isLitecoin,
  coins.isZcash,
  coins.isDogecoin,
  coins.isEmercoin,
  coins.isHodlcoin,
  coins.isViacoin,
  coins.isNamecoin,
)

module.exports = coins
