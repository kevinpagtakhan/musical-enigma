const express = require('express');
const http = require('http');
const fs = require('fs');
const jsYaml = require('js-yaml');
const { OpenApiValidator } = require('express-openapi-validate');
const app = express();
const server = http.createServer(app);
const PORT = 3333;

const openApiDocument = jsYaml.safeLoad(
    fs.readFileSync('./openapi.yml', 'utf-8')
);
const validator = new OpenApiValidator(openApiDocument);

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.get(
    '/music',
    validator.validate('get', '/music'),
    (req, res, next) => {
        res.status(200).json({});
    }
);

app.use((err, req, res, next) => {
    res
        .status(err.statusCode)
        .json({
            status: err.statusCode,
            message: err.message,
            name: err.name
        });
});

server.listen(3333, () => console.log(`musical-enigma @ localhost:${PORT}`));
