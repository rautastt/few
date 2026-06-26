const ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // yes harold that is indeed the alphabet, just remove the numbers

function nanoid(size = 21) {
  let id = '';
  const bytes = require('crypto').randomBytes(size);
  for (let i = 0; i < size; i++) {
    id += ALPHABET[bytes[i] % ALPHABET.length];
  }
  return id;
}

module.exports = { nanoid };
