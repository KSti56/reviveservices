const express = require('express');
const router = express.Router();

router.get('/discord-bots', (req, res) => {
    res.render('discord_bots');
})

router.get('/spigot-plugins', (req, res) => {
    res.render('spigot_plugins');
})

router.get('/graphics', (req, res) => {
    res.render('graphics');
})

router.get('/minecraft-builds', (req, res) => {
    res.render('minecraft_builds');
})

router.get('/corebot-addons', (req, res) => {
    res.render('corebot_addons');
})

module.exports = router;