const { GetUsers } = require('../controller/UserCtrl');

const router = require('express').Router();

router.get("/users", GetUsers);

module.exports = router