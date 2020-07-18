const connection = require('../database/connection')
const crypto = require('crypto')


module.exports ={
    async create(req,res) {
        const {name, email, whatsapp, city, uf  } = req.body
    
        const id = crypto.randomBytes(4).toString('HEX')
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return res.json({ id })
    },

    async index(req,res){
        
        const ongs = await connection('ongs').select('*')
        return res.json(ongs) 
        
    },

    async delete(req,res){
        const { id } = req.body


        const ongs = await connection('ongs')
            .where('id',id)
            .select('id')
            
        const ongs_name = await connection('ongs')
            .where('id',id)
            .select('name')     


        
        const ong_id = req.headers.authorization

        console.log(ongs[0].id);
        

        if(ongs[0].id !== ong_id){
            return res.status(401).json({error:"login with your id"})
        }

        await connection('ongs').where('id',id).delete()
        
        return res.json(`${ongs_name[0].name} deleted`)
    },
    async update(req,res){
        const {name, email, whatsapp, city, uf } = req.body
        
        const ong_id = req.headers.authorization
        
        const ongs = await connection('ongs')
            .where('id',ong_id)
            .select('id')
        
        if(ongs[0].id !== ong_id){
            return res.status(401).json({error:'login with your id'})
        }

        await connection('ongs')            
            .where('id',ong_id)
            .update({name, email, whatsapp, city, uf })
        
        return res.json(ongs)

    }

}