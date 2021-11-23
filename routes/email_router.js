var express = require("express");
var router = express.Router();
const email = require("../controllers/email_controller");

router.post("/wallet", email.sendMail);

module.exports = router;
