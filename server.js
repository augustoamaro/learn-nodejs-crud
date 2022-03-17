const express = require('express');

// Routes
const emplooyeeRoutes = require('./src/routes/employee');

const app = express();
const port = process.env.port || 3000;


// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');
//     next();
// });

app.use((req, res, next) => {
    const headers = req.headers;
    console.log(headers)
    next()
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// rota URL padrão
app.get('/', (req, res) => {
    res.send('api funcionando')
});

app.use('/api/v1/employee', emplooyeeRoutes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


