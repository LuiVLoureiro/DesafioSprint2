//Importando dados da Database
const connection = require('../database/database')

//Criando class cadastro para manipulação de dados oriundos do server
class Cadastro {
    adiciona(cadastro) {
        const sql = 'INSERT INTO cadastro SET ?'

        connection.query(sql, cadastro, (erro, results) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(results)
            }
        })
    }
}

//Exportando para outras pastas
module.exports = new Cadastro