const express = require('express');
const router = express.Router();

router.get('/discord-bots', (req, res) => {
    res.render('discord_bots');
})

router.get('/graphics', (req, res) => {
    res.render('graphics');
})
module.exports = router;