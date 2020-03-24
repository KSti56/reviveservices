const router = require('express').Router();

router.get('/discord', (req, res) => {
    res.redirect("https://discord.gg/8FXEpVf");
})

module.exports = router;