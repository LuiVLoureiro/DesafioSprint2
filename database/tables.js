//Criação de Tabelas
class tables {
    init(connection) {
        this.connection = connection

        this.createCadastro()
    }

    createCadastro() {
        const sql = 'CREATE TABLE IF NOT EXISTS Cadastro (id int NOT NULL AUTO_INCREMENT, name varchar(50) NOT NULL, cpf VARCHAR(11) NOT NULL, birthDate DATE NOT NULL, email VARCHAR(100) NOT NULL, password VARCHAR(100) NOT NULL, address VARCHAR(150) NOT NULL, number INT NOT NULL, complement VARCHAR(50) NOT NULL, city VARCHAR(50) NOT NULL, state VARCHAR(2) NOT NULL, country VARCHAR(50) NOT NULL, zipCode VARCHAR(8) NOT NULL, PRIMARY KEY(id))'

        this.connection.query(sql, error => {
            if (error) {
                console.log(error)
            } else {
                console.log('Tabela Criada com Sucesso')
            }
        })
    }
}

module.exports = new tables