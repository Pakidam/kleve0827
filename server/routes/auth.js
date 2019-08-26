const router = require("express").Router();
const handle = require("../handlers");

//process.env.SECRET_KEY = "secret";

router.post("/register", handle.register);

router.post("/login", handle.login);

module.exports = router;
