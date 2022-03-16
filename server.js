const express = require('express');

const app = express();

const port = process.env.port || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// rota URL padrão
app.use('/', (req, res) => {
    res.send('api funcionando')
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');
    next();
});