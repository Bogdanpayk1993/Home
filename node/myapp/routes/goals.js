var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('goals', { title: 'Мої цілі:', goals: ['Вивчити JS','Знайти роботу'] });
});

module.exports = router;