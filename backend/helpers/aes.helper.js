require("dotenv").config();
const crypto = require("crypto");

class AES {
  constructor() {
    this.key = process.env.AES_KEY;
    this.iv = process.env.AES_IV;

    if (!this.key || !this.iv) {
      throw new Error("AES_KEY and AES_IV must be set in the .env file");
    }

    if (this.key.length !== 64) {
      throw new Error(
        "Invalid key length. Key must be 64 hexadecimal characters (32 bytes)."
      );
    }
    if (this.iv.length !== 32) {
      throw new Error(
        "Invalid IV length. IV must be 32 hexadecimal characters (16 bytes)."
      );
    }

    this.key = Buffer.from(this.key, "hex");
    this.iv = Buffer.from(this.iv, "hex");
  }

  encrypt(text) {
    const cipher = crypto.createCipheriv("aes-256-cbc", this.key, this.iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
  }

  decrypt(encryptedText) {
    const decipher = crypto.createDecipheriv("aes-256-cbc", this.key, this.iv);
    let decrypted = decipher.update(encryptedText, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  }
}

module.exports = AES;
