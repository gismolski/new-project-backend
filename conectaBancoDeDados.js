const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados(){

    try{
        console.log('Conexao com o Banco de Dados iniciou')

        await mongoose.connect(process.env.MONGO_URL)

        console.log('Conexao com o Banco de Dados feita com sucesso')
        
    } catch(erro){
        console.log(erro)

    }
        

}

module.exports = conectaBancoDeDados