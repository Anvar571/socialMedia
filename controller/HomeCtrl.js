module.exports = class HomeCtrl {
    static async HomeGetCtrl(req, res){
        try {
            res.json({
                message: "home page"
            })
        } catch (error) {
            
        }
    }
}