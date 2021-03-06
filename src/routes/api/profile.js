const router = require("express").Router();
const passport = require("passport");

const ProfileController = require("../../controllers/ProfileController");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  ProfileController.get
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  ProfileController.create
);

router.get(
  "/handle/:handle",
  passport.authenticate("jwt", { session: false }),
  ProfileController.getHandleById
);

router.get(
  "/user/:userId",
  passport.authenticate("jwt", { session: false }),
  ProfileController.getUserByUserId
);

router.get("/all", ProfileController.all);

router.post(
  "/experience",
  passport.authenticate("jwt", { session: false }),
  ProfileController.createExperience
);

router.post(
  "/education",
  passport.authenticate("jwt", { session: false }),
  ProfileController.createEducation
);

router.delete(
  "/experience/:expId",
  passport.authenticate("jwt", { session: false }),
  ProfileController.deleteExperience
);

router.delete(
  "/education/:eduId",
  passport.authenticate("jwt", { session: false }),
  ProfileController.deleteEducation
);

router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  ProfileController.deleteProfile
);

module.exports = router;
