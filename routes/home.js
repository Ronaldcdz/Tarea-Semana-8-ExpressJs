const express = require("express");
const router = express.Router();



router.get("/", (req, res, next) => {

    res.status(200);
    res.render("home", {layout: false});
})

module.exports = router;