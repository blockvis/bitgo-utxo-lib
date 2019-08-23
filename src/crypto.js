var createHash = require('create-hash')
var crypto = require('crypto')

function ripemd160 (buffer) {
  var hash = 'rmd160'
  var supportedHashes = crypto.getHashes()
  // some environments (electron) only support the long alias
  if (supportedHashes.indexOf(hash) === -1 && supportedHashes.indexOf('ripemd160') !== -1) {
    hash = 'ripemd160'
  }

  return createHash(hash).update(buffer).digest()
}

function sha1 (buffer) {
  return createHash('sha1').update(buffer).digest()
}

function sha256 (buffer) {
  return createHash('sha256').update(buffer).digest()
}

function hash160 (buffer) {
  return ripemd160(sha256(buffer))
}

function hash256 (buffer) {
  return sha256(sha256(buffer))
}

function blake256 (buffer) {
  return createHash('BLAKE2s256').update(buffer).digest()
}

function blakeHash160 (buffer) {
  return ripemd160(blake256(buffer));
}

function blakeHash256 (buffer) {
  return blake256(blake256(buffer));
}

module.exports = {
  hash160: hash160,
  hash256: hash256,
  ripemd160: ripemd160,
  sha1: sha1,
  sha256: sha256,
  blake256,
  blakeHash256,
  blakeHash160
}
