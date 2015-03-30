var express = require('express');
var router = express.Router();

/* GET slide 1. */
router.get('/slides', function(req, res, next) {
  res.render('slides', { title: 'SMSW Slideshow' });
});

module.exports = router;
