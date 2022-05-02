//Chamar Biblioteca Express pelo "Required"
const express = require('express')

//Definindo chamada do Express pela const "app"
const app = express()

//Definindo Biblioteca para assimilação de mensagens 
const bodyParser = require('body-parser')

//Definindo exportação do módulo de database para a linha de comandos principal
const connection = require('./database/database')

//Definindo constante de Tabelas
const tables = require('./database/tables')

//Definindo 
const Cadastro = require('./models/cadastro')

//Chamada para a conexão ao banco de dados
connection.connect(error => {
    if (error) {
        console.log(error)
    } else {
        console.log('Conectado ao Banco de Dados com Sucesso')

        tables.init(connection)

        //Definindo chamada para o Body-Parser dentro da const 'app'
        app.use(bodyParser.json())

        app.use(bodyParser.urlencoded({ extended: true }))

        //Chamada da porta 3000 para subir servidor
        app.listen(3000, () => console.log('Servidor Operando com Sucesso'))

        //Enviar Mensagem usando método GET
        app.get('/api/v1/user', (req, res) => {
            res.send('Você está na rota de cadastro')
            console.log(cadastro)
        })

        //Enviar Dados ao Servidor usando método POST
        app.post('/api/v1/user', (req, res) => {
            const cadastro = req.body

            Cadastro.adiciona(cadastro, res)
                //res.send('Você está na rota de cadastro atráves do método POST')
        })
    }
})