//Criando chamada à biblioteca MySQL
const mysql = require('mysql2')

//Estabelecedo conexão e atrelando-a à uma const
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'cadastro_dbs'
})

//Exportando const 'connection' ao banco de dados para outras bibliotecas
module.exports = connection