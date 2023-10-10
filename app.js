const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', (req, res, next) => {
    console.log("This always run");
    next(); // All the request to continue to the next middleware in line
});

app.post('/add-product', (req, res, next) => {
    // app.use('/add-product', (req, res, next) => {
    console.log("In another middleware");
    res.send('<form action="/product" method="POST"><input type="text" name="product" ><button type ="submit">Add product</button></form>')
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log("In the middleware");
    res.send('<h1>Hello from middleware</h1>');
});
app.listen(3000);