const connection = require('../db/connection')

class ClientController{

    static getClients(req, res){
        const sql = "SELECT * FROM clientes";
        connection.query(sql, (err, result) => {
            res.json(result)
        });
    }

    static getClientById(req, res){
        let {id} = req.params;
        const sql = `SELECT * FROM clientes WHERE CodigoDoCliente = ?`
        connection.query(sql, id, (err, result) => {
            res.json(result)
        })
    }

    static getClientByName(req, res) {
        let name = req.params;
        const sql = `SELECT * FROM clientes WHERE NomeDoContato = ?`
        connection.query(sql, name, (err, result) => {
            res.json(result)
        })
    }

    static formNewClient(req, res) {
        res.render('SaveClient')
    }
    
    static async saveClient(req, res){
        let client = req.body;
        let values = [client.CodigoDoCliente, client.NomeDaEmpresa, client.NomeDoContrato, client.CargoDoContrato, client.Endereco, client.Cidade, client.Regiao, client.CEP, client.Pais, client.Telefone, client.Fax]

        const sql = `INSERT INTO clientes (CodigoDoCliente,NomeDaEmpresa,NomeDoContato,CargoDoContato,Endereço,Cidade, Região, CEP, Pais, Telefone, Fax) VALUES (?,?,?,?,?,?,?,?,?,?,?)`
        await connection.promise().query(sql, values)
        res.json('Cliente cadastrado com sucesso')
    }

    static async getTotalClient(req,res){
        const sql = 'SELECT COUNT(*) AS tot_register FROM clientes'
        const json = await connection.promise().query(sql)
        const result = json[0]
        result.find(obj => {
            res.json(obj.tot_register)
        })
    }

    static async deleteClientById(req,res){
        const {id} = req.params;
        const sql = `DELETE FROM clientes WHERE CodigoDoCliente = ?`
        await connection.promise().query(sql, id)
        res.json('Cliente deletado com sucesso')
    }
}
    
module.exports = ClientController