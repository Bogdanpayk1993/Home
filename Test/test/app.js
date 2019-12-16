var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bodyParser = require('body-parser');
var app = express();

const session = require('express-session');
const { auth } = require('express-openid-connect');

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

app.use(express.urlencoded({
  extended: false
}));

app.use(session({
  secret: 'this should be a secret',
  resave: true,
  saveUninitialized: false
}));

app.use(auth({
  required: false,
  auth0Logout: true,
  baseURL: 'http:/localhost:3000',
  issuerBaseURL: 'http://dev-pdufe547.auth0.com',
  clientID: 'PfPhoHLgR3grlQj5GZcw838p20vxHek5'
}))

app.get('/callback', (req, res) => {
  res.send(req.isAuthenticated() ? 'Logged in' : 'Logged out')
})

// Додавання товарів адміністратором
app.get('/administration/:name.:number.:description.:price', (req, res) => {
  pool.query(`CREATE TABLE ${req.params.name} (LastName varchar(255), FirstName varchar(255), Comments varchar(350))`, (error, result) => {
    if (error) {
      res.status(300).send(`You can't add this goods, it already is in database.`) 
    }
    else {
      pool.query('INSERT INTO goods (name, number, description, price) VALUES ($1,$2,$3,$4)', [`${req.params.name}`, parseInt(req.params.number) , `${req.params.description}`, parseInt(req.params.price)], (error) => {
        if (error) {
          throw error
        }
      res.status(200).send(`Good added - ${req.params.name}_${req.params.number}_${req.params.description}_${req.params.price}`)
      })
    }
  })
}) 
// Видалення товарів адміністратором
app.get('/administration/delete/:name', (req, res) => {
  pool.query(`DROP TABLE ${req.params.name}`, (error, result) => {
    if (error) {
      res.status(300).send(`This database haven't such goods.`)
    }
    else {
      pool.query(`DELETE FROM goods WHERE name='${req.params.name}'`, (error, result) => {
        if (error) {
          throw error
        }
        res.status(200).send(`Good delete`)
      })  
    } 
  })
})
// Перегляд списку товарів
app.get('/product', (req, res) => {
  pool.query('SELECT name FROM goods', (error, result) => {
    if (error) {
      throw error
    }
    res.status(200).json(result.rows)
  })
})
// Перегляд відсортованого списку товарів
app.get('/product/sort', (req, res) => {
  pool.query('SELECT name,price FROM goods', (error, result) => {
    if (error) {
      throw error
    }
    res.status(200).json(result.rows.sort((a, b) => a.price > b.price ? 1 : -1))
  })
})
// Перегляд відфільтрованого списку товарів
app.get('/product/filter/:min.:max', (req, res) => {
  pool.query(`SELECT name FROM goods WHERE price > ${parseInt(req.params.min)} and price < ${parseInt(req.params.max)}`, (error, result) => {
    if (error) {
      throw error
    }
    res.status(200).json(result.rows)
  })
})
// Перегляд певного товару 
app.get("/product/:name", (req, res) => {
  pool.query(`SELECT * FROM goods WHERE name='${req.params.name}'`, (error, result) => {
    if (error) {
      throw error
    }
    res.status(200).json(result.rows)
  })
})
// Коментування товару 
app.get('/product/comment/:name.:lastname.:firstname.:comments', (req, res) => {
  pool.query(`SELECT EXISTS(SELECT (lastname, firstname, comments) FROM ${req.params.name} WHERE lastname='${req.params.lastname}' AND firstname='${req.params.firstname}' AND comments='${req.params.comments}')`, (error, result) => {
    if (result.rows[0].exists) {
      res.status(200).send('Such comment you sended')
    } else {
      pool.query(`INSERT INTO ${req.params.name} (lastname, firstname, comments) VALUES ($1,$2,$3)`, [`${req.params.lastname}`,`${req.params.firstname}`,`${req.params.comments}`], (error) => {
        if (error) {
          throw error
        }
        res.status(200).send('Your comment sended')
      })
    }
  })
})
// Перегляд коментарів що до перного товару 
app.get("/product/comment/:name", (req, res) => {
  pool.query(`SELECT * FROM ${req.params.name}`, (error, result) => {
    if (error) {
      res.status(300).send(`This goods don't find`)
    } else {
      res.status(200).json(result.rows)
    }
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
