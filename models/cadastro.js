//Importando dados da Database
const connection = require('../database/database')

//Criando class cadastro para manipulação de dados oriundos do server
class Cadastro {
    adiciona(cadastro, res) {
        const sql = 'INSERT INTO cadastro SET ?'

        connection.query(sql, cadastro, (erro, results) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(results)
            }
        })
    }
}

//Exportando para outras pastas
module.exports = new Cadastro