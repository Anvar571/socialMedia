const UserModel = require("../model/UserModel")

module.exports = class UserCtrl {
    static async GetUsers(req,res ){
        try {
            const users = await UserModel.find({}).select("username email followers following story");

            res.json({
                message: "All users",
                users
            })
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }

    static async SearchUser(req, res){
        try {
            
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }
}