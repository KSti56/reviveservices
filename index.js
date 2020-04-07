const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public/assets'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public'));

app.get(['/', '/home'], (req, res) => {
    res.render('home');
})

// Routers
app.use('/our-work/', require('./routes/our-work'));
app.use('/redirect', require('./routes/redirects'))
app.listen(8083);
console.log('App listening at port 8083')