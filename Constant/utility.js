const secret_key_encryption = "'XD=8y9%%g)gn}irFC5l2!]>G5[c8|";
var CryptoJS = require("crypto-js");
export const encryption = (id) => {
  var ciphertext = CryptoJS.AES.encrypt(id, secret_key_encryption).toString();
  return ciphertext;
};
export const decryption = (ciphertext) => {
  var bytes = CryptoJS.AES.decrypt(ciphertext, secret_key_encryption);
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
