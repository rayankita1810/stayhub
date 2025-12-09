const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { savedRedirectUrl } = require("../middleware");
const router = express.Router({ mergeParams: true });
const userController = require("../controllers/users.js");

router.route("/signup")
.get(userController.showSignupPage)
.post(wrapAsync(userController.signup));

router.route("/login")
.get(userController.getLoginPage)
.post(
  savedRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login
);


router.get("/logout", userController.logout);

module.exports = router;
