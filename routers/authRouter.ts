const router = require("express").Router();
const authController = require("../controllers/authController");
// const { authenToken } = require('../middlewares/token')

router.post("/createAccount", authController.createAccount);
router.post("/loginAccount", authController.loginAccount);
router.post("/loginAccountGoogle", authController.loginAccountGoogle);

module.exports = router;
