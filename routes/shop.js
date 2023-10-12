const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../utils/path');
const adminData = require('./admin');
router.get('/', (req, res, next) => {
    const products = adminData.products;
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop', { prods: products, docTitle: "Shop" });
});

module.exports = router;