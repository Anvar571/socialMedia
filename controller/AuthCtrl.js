const UserModel = require("../model/UserModel");
const { PasswordCrypt, ComparePassword } = require("../module/bcrypt");
const { refreshtoken, accesstoken } = require("../module/jwt");
const jwt = require("jsonwebtoken");

module.exports = class AuthCtrl {
    static async register(req, res) {
        try {
            const {username, email, password, story} = req.body;

            const newUserName = username.toLowerCase().replace(/ /g, '');

            const checkEmail = await UserModel.findOne({email});
            if (checkEmail) throw new Error("This email already registered");

            if (!password) throw new Error("Password is empty");
            const hashPass = await PasswordCrypt(password);

            const newUser = new UserModel({
                username: newUserName, email, password: hashPass, story
            })

            await newUser.save();

            const refresh_token = await refreshtoken({id: newUser._id});
            const access_token = await accesstoken({id: newUser._id});

            res.cookie("refreshtoken", refresh_token, {
                httpOnly: true,
                path: "/api/refreshtoken",
                maxAge: 30*24*60*60*1000
            })

            res.json({
                ok: true,
                message: "register successfully",
                access_token,
                user: {
                    newUser,
                }
            })
        } catch (error) {
            return res.status(501).json({message: error.message})
        }
    }

    static async login(req,res){
        try {
            const {email, password} = req.body;

            const user = await UserModel.findOne({email});
            if (!user) throw new Error("Email or password exist");

            const checkPass = await ComparePassword(user.password, password);
            if(!checkPass) throw new Error("Email or password exist");

            const refresh_token = await refreshtoken({id: user._id});
            const access_token = await accesstoken({id: user._id});

            res.cookie("refreshtoken", refresh_token, {
                httpOnly: true,
                path: "/api/refreshtoken",
                maxAge: 30*24*60*60*1000
            })

            res.status(201).json({
                ok: true,
                access_token,
                message: "Login successfully",
                user: {
                    user
                }
            })
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }

    static logout(req,res){
        try {
            res.clearCookie("refreshtoken", {path: "/api/refreshtoken"})
            return res.status(201).json({message: "Logged out"});
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }

    static generateToken(req, res){
        try {
            const rfToken = req.cookies.refreshtoken;
            if (!rfToken) return res.status(401).json({message: 'Pleace login now'});
            
            jwt.verify(rfToken, process.env.REFRESH_TOKEN, async (err, result) => {
                if (err) return res.status(401).json({message: 'Pleace login now'});

                const user = await UserModel.findById(result.id).select("-password")
                // .populate()

                if (!user) return res.status(401).json({message: 'This does is exist'});

                const access_token = await accesstoken({id: result.id});

                res.status(201).json({
                    access_token,
                    user
                })
            });

        } catch (error) {
            
        }
    }
}