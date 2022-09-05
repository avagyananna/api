const router = require("express").Router();
const { expressWrapper } = require("../helper");
const { createUser , deleteUser, login} = require("../../modules/auth")

router.post("/register", expressWrapper(createUser))

router.delete("/delete", expressWrapper(deleteUser))

router.post("/login", expressWrapper(login))



module.exports = router