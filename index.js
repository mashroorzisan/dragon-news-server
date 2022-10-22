const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors')


app.use(cors())
const categories = require('./data/categories.json')

app.get('/', (req, res) => {
    res.send('news api is running');
})

app.get('/news', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log(`the port is ${port}`)
})