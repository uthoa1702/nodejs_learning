const express = require('express');
const path = require('path');
const morgan = require('morgan');

const handlebars = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db/index')

// connect db
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

// template engine
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
console.log(__dirname);
app.set('views', path.join(__dirname, 'resource','views'));

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

