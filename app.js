const express = require('express');
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.use('/admin', adminRoutes);
app.use(shopRoutes);
// app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    // res.status(404).send("<h1>Page Not Found</h1>");
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);