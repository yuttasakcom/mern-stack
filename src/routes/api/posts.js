const router = require("express").Router();

router.get("/", (req, res) => res.send("Posts"));

module.exports = router;