const router = require("express").Router();
const passport = require("passport");

const ProfileController = require("../../controllers/ProfileController");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  ProfileController.get
);

module.exports = router;
