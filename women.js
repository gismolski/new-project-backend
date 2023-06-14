const express = require("express")
const router = express.Router()


const app = express()
const porta = 1122

const women = [
    {
        name: 'Giseli Smolski',
        imagem: 'https://www.linkedin.com/in/giseli-smolski-8a617269/',
        minibio: 'Student'
    },
    {
        name: 'Iana Chan',
        imagem: '',
        minibio: 'Create PrograMaria'
    },
    {
        name: 'Simara Conceicao',
        imagem: '',
        minibio: ''
    }
]

function mostraWomen(request, response){

}
function mostraPorta(){
    console.log('Servidor criado e rodando na porta', porta)
}

app.listen(porta, mostraPorta)