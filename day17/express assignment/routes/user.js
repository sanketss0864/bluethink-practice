const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/user', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'user.html'));
});

// /admin/add-product => POST
// router.post('/add-product', (req, res, next) => {
//   console.log(req.body);
//   res.redirect('/');
// });

module.exports = router;
