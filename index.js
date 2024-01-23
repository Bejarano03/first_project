const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.get('/about', (req,res) => {
    res.send('About Page');
});

app.get('*', (req,res) => {
    res.send('404 Page Not Found');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })