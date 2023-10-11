const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../utils/path');

// /admin/add-product =>GET
router.get('/add-product', (req, res, next) => {
    // app.use('/add-product', (req, res, next) => {
    // res.send();
    //  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product =>POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;