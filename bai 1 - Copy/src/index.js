

const express = require('express');
const path = require('path');
const morgan = require('morgan');

const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));



app.use(morgan('combined'));

// template engine
app.engine('hbs', handlebars.engine(
    {
        extname: '.hbs'
    }
));
app.set('view engine', 'hbs');
console.log(__dirname);
app.set('views', path.join(__dirname, 'resource\\views'));

app.get('/', (req, res) => {
     res.render('home');
     // return res.send('xin chao')
});

app.get('/list', (req, res) => {
    res.render('list');
    // return res.send('xin chao')
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});