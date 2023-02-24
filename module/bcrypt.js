const bcrypt = require("bcrypt");

module.exports = class Crypt {
    static async PasswordCrypt(password) {
        return bcrypt.hash(password, 10);
    }

    static async ComparePassword(hash, password) {
        return bcrypt.compareSync(password, hash);
    }
}