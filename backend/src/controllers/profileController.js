
const connection = require("../database/connection");

module.exports={
    async index(req,res){
        
        const ong_id = req.headers.authorization
        if(!ong_id){
            console.log('erro de autorizacao')
            return res.status(400).send('error')
        }
        
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*')

        return res.json(incidents)
        

    }
}