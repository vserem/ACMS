var express = require('express');
var router = express.Router();

/* GET Home Page. */
router.get('/', function (req, res) {
  res.render('index.njk', { title: 'ACMS | Home' });
});

/* GET Dashboard. */
router.get('/dashboard', function (req, res) {
  res.render('dashboard.njk', { title: 'ACMS | Dashboard',user:req.user });
});

module.exports = router;
