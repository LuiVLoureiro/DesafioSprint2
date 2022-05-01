//Chamar Biblioteca Express pelo "Required"
const express = require('express')

//Definindo chamada do Express pela const "app"
const app = express()

//Chamada da porta 3000 para subir servidor
app.listen(3000, () => console.log('Servidor Operando com Sucesso'))

//Enviar Mensagem usando método GET
app.get('/api/v1/user', (req, res) => {
    res.send('Você está na rota de cadastro')
})

//Enviar Dados ao Servidor usando método POST
app.post('/api/v1/user', (req, res) => {
    res.send('Você está na rota de cadastro')
})