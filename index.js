const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public'));

app.get(['/', '/home'], (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

// Routers
app.use('/redirect', require('./routes/redirects'))
app.listen(8080);
console.log('App listening at port 8080')