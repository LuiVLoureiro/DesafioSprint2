//Importando dados da Database
const connection = require('../database/database')

//Criando class cadastro para manipulação de dados oriundos do server
class Cadastro {
    adiciona(cadastro, res) {
        const sql = 'INSERT INTO cadastro SET ?'

        //Validar superficialmente o CPF atráves dos 11 dígitos 
        const cpfValidation = cadastro.cpf.length < 11

        //Validar senha a partir dos 6 dígitos
        const passwordValidation = cadastro.password.length >= 6

        //Campo de Validação
        const validationSide = [{
                cpf: 'cpf',
                validation: cpfValidation,
                alert: 'CPF deve conter 11 Dígitos'
            },
            {
                password: 'password',
                validation: passwordValidation,
                alert: 'Senha deve conter no mínimo 6 dígitos'
            }
        ]

        //Const´s para discernir se haverá erros ou não
        const erros = validationSide.filter(side => !side.true)
        const errorFrequency = erros.length

        if (errorFrequency) {
            res.status(400).json(erros)
        } else {
            connection.query(sql, cadastro, (erro, results) => {
                if (erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(results)
                }
            })
        }
    }
}

//Exportando para outras pastas
module.exports = new Cadastro