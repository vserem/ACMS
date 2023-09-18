var express = require('express');
var router = express.Router();

/* GET Home Page. */
router.get('/', function (req, res) {
  res.render('index.html', { title: 'ACMS | Home' });
});

/* GET Dashboard. */
router.get('/dashboard', function (req, res) {
  res.render('dashboard.html', { title: 'ACMS | Dashboard',user:req.user });
});

module.exports = router;
