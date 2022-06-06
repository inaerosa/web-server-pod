const connection = require('../db/connection')

class ClientController{

    static getClients(req, res){
        const sql = "SELECT * FROM clientes";
        connection.query(sql, (err, result) => {
            console.log(result)
            res.render('ListClients', {result})
        });
    }

    static formSearchCode(req, res) {
        res.render('SearchClientById')
    }
    static getClientById(req, res){
        const {id} = req.body;
        const sql = `SELECT * FROM clientes WHERE CodigoDoCliente = ?`
        connection.query(sql, id, (err, result) => {
            res.render('ListClients', {result})
        })
    }

    static formSearchName(req,res){
        res.render('SearchClientByName')
    }

    static getClientByName(req, res) {
        let {name} = req.body;
  
        const sql = `SELECT * FROM clientes WHERE NomeDoContato = ?`
        connection.query(sql, name, (err, result) => {
            res.render('ListClients', {result})
        })
    }

    static formNewClient(req, res) {
        res.render('SaveClient')
    }
    
    static async saveClient(req, res){
        let client = req.body;
        console.log(client)

        try{
            let values = [client.CodigoDoCliente, client.NomeDaEmpresa, client.NomeDoContato, client.CargoDoContato, client.Endereço, client.Cidade, client.Região, client.CEP, client.Pais, client.Telefone, client.Fax]
            const sql = `INSERT INTO clientes (CodigoDoCliente,NomeDaEmpresa,NomeDoContato,CargoDoContato,Endereço,Cidade, Região, CEP, Pais, Telefone, Fax) VALUES (?,?,?,?,?,?,?,?,?,?,?)`
            await connection.promise().query(sql, values)
            res.redirect('/')
        } catch (e){
            console.log(e)
        }
        
    }

    static async getTotalClient(req,res){
        const sql = 'SELECT COUNT(*) AS tot_register FROM clientes'
        const json = await connection.promise().query(sql)
        const result = json[0]
        result.find(obj => {

            res.render('TotalClients', {obj})
        })
    }

    static async formDeleteClient(req, res) {
        res.render('DeleteClient')
    }
    static async deleteClientById(req,res){
        const {name} = req.body;
        try{
            const sql = `DELETE FROM clientes WHERE CodigoDoCliente = ?`
            await connection.promise().query(sql, name)
            res.redirect('/')
        } catch(e){
            console.log(e)
        }
        
    }
}
    
module.exports = ClientController