const express = require('express');
const http = require('http');
const path = require('path');
const { OpenApiValidator } = require('express-openapi-validator');
const app = express();
const server = http.createServer(app);
const PORT = 3333;

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

new OpenApiValidator({
    apiSpecPath: path.resolve(__dirname, './openapi.yml'),
}).install(app);

app.get('/music', (req, res, next) => {
    res.status(200).json({});
});

app.use((err, req, res, next) => {
    res.status(err.status).json({ status: err.status, message: err.message, name: err.name });
});

server.listen(3333, () => console.log(`musical-enigma @ localhost:${PORT}`));
