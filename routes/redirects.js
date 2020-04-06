const router = require('express').Router();

router.get('/discord', (req, res) => {
    res.redirect("https://discord.gg/8FXEpVf");
})

router.get('/mcm', (req, res) => {
    res.redirect("https://www.mc-market.org/members/112685/");
})

module.exports = router;