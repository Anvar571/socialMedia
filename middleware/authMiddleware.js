const jwt = require("jsonwebtoken");
const UserModel = require("../model/UserModel");

function authMiddleware(req, res, next) {
    try {
        const token = req.header("authorization")

        if (!token) throw new Error("You are not token")

        const {id} = jwt.verify(token, process.env.ACCESS_TOKEN);
        if (!id) throw new Error("Invalid Authentication");

        const user = UserModel.findOne({_id: id});

        req.user = user
        
        next();
    } catch (error) {
        return res.status(401).json({message: error})
    }
}

module.exports = {
    authMiddleware
}