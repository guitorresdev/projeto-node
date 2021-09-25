const http = require('http');
const express = require('express');
const { profile } = require('express');
const bodyParser = require ('body-parser');
const app = express();
const porta = 3030;
app.set('port', porta);
app.use (bodyParser.json());

let contador = 2;

const clientes = [
    {
    id: 1,
    nome: 'Joao',
    email: 'joao@email.com'
    },
    {
    id: 2,
    nome: 'Cristina',
    email: 'cristina@email.com'
    }
    ]

app.post('/clientes', (req, res, next) => {
    const cliente = req.body;
    clientes.push({id: contador += 1, nome: cliente.nome, email: cliente.email});
    console.log(clientes);
    res.status(201).json(clientes);
});

app.delete('/clientes', (req, res, next) => {
    const cliente = req.body;
    rest.json(clientes);

});

app.put('/clientes', (req, res, next) => {
    const cliente = req.body;
    rest.json(clientes);
});

app.get('/teste', (req, res, next) => {
    res.json(clientes);
});

const server = http.createServer(app);
server.listen(3030);