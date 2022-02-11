const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World! -------- erro');
});

module.exports = app.listen(port, () => { console.log('App rodando na porta 3000!'); });