const jwt = require("jsonwebtoken");

module.exports = class JWT {
    static async refreshtoken(payload){
        return jwt.sign(payload, process.env.REFRESH_TOKEN)
    }

    static async accesstoken(payload){
        return jwt.sign(payload, process.env.ACCESS_TOKEN);
    }
}