const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: "Silmara Conceicao",
        imagem: "https://github.com/Simaraconceicao.png",
        minibio: "Desenvolvedora e Instrutora"
      
    },
    {
        nome: "Iara Chan",
        imagem: " ",
        minibio: "Fundadora PrograMaria"
    },
    {
        nome: "Giseli Smolski",
        imagem: " ",
        minibio:" Estudante"

    }

]

function mostraMulheres(request, response){
    response.json(mulheres)
}

function mostraPorta(){
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)