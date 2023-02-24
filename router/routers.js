const { authMiddleware } = require("../middleware/authMiddleware");

const routers = require("express").Router();

routers.use("/auth", require("./AuthRoute"));

routers.use("/", authMiddleware, require("./HomeRoute"));

routers.use("/user", authMiddleware, require("./UserRoute"));

module.exports = routers