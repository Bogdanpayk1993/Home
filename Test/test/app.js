var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');

var bodyParser = require('body-parser');
var app = express();

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'shop',
  password: '1111',
  port: 5432,
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req,res) => {
  res.json({ info: 'Node.js, Express, and Postgres API'})
})

app.get('/administration/:name.:number.:description.:price', (req, res) => {
  pool.query('INSERT INTO goods (name, number, description, price) VALUES ($1,$2,$3,$4)', [`${req.params.name}`, parseInt(req.params.number) , `${req.params.description}`, parseInt(req.params.price)], (error) => {
    if (error) {
      throw error
    }
    res.status(201).send(`Good added - ${req.params.name}_${req.params.number}_${req.params.description}_${req.params.price}`)
  })
}) 

app.get('/product', (req, res) => {
  pool.query('SELECT name FROM goods', (error, result) => {
    if (error) {
      throw error
    }
    res.status(200).json(result.rows)
  })
})

app.get("/product/:name", (req, res) => {
  pool.query(`SELECT * FROM goods WHERE name='${req.params.name}'`, (error, result) => {
    if (error) {
      throw error
    }
    res.status(200).json(result.rows)
  })
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
