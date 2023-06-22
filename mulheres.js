const express = require("express") //aqui estou iniciando o express
const router = express.Router() //aqui estou configurando a primeira parte da rota
const cors = require('cors') // aqui estou trazendo o pacote cors que permite consumir essa API no frontend


const conectaBancoDeDados = require('./conectaBancoDeDados') // aqui estou ligando o arquivo com o banco de dados 
conectaBancoDeDados() // aqui estou chamando a funcao que conecta com o banco de dados

const mulher = require('./mulherModel')

const app = express() // aqui estou iniciando o app
app.use(express.json())
app.use(cors())


const porta = 3333 // aqui estou criando a porta


//GET
async function mostraMulheres(request, response){
    try {
        const mulheresVindasDoBancoDeDados = await mulher.find()

        response.json(mulheresVindasDoBancoDeDados)

    }catch (erro){

    }
    response.json()
}

// POST 
async function criaMulher(request, response) {
    const novaMulher = new mulher ({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    } catch (erro) {
        console.log(erro)
    }
}

//PATCH
async function corrigeMulher(request, response){
    try{
        const mulherEncontrada = await mulher.findById(request.params.id)
        if (request.body.nome){
            mulherEncontrada.nome = request.body.nome
        }
    
        if(request.body.minibio){
            mulherEncontrada.minibio =request.body.minibio
        }
    
        if (request.body.imagem){
            mulherEncontrada.imagem = request.body.imagem
        }

        if (request.body.citacao){
            mulherEncontrada.citacao = request.body.citacao
        }

        response.json(mulher)

        const mulhedrAtualizadaNoBancoDeDados = await mulherEncontrada.save()

        response.json(mulhedrAtualizadaNoBancoDeDados)

    } catch (erro) {
        console.log(erro)
    }
   
}


//DELETE
async function deletaMulher(request, response){
    try{
        await mulher.findByIdAndDelete(request.params.id)
        response.json({ mensagem: 'Mulher deletada com sucesso'})
    } catch(erro) {
        console.log(erro)
    }
        
    }

//PORTA
function mostraPorta(){
    console.log('Servidor criado e rodando na porta', porta)
}




app.use(router.get('/mulheres', mostraMulheres)) // configurei rota GET/mulheres
app.use(router.post('/mulheres', criaMulher)) // config rota POST/mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) // config rota PATCH / mulheres
app.use(router.delete('/mulheres/:id', deletaMulher)) // config rota DELETE/ mulheres
app.listen(porta, mostraPorta) // servidor ouvindo a porta