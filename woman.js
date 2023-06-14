const express = require("express")
const router = express.Router()

const app = express()
const porta = 1122

function mostraWoman(request, response){
    response.json({
        nome: 'Giseli Silvana Smolski',
        picture: 'https://www.linkedin.com/in/giseli-smolski-8a617269/',
        bio: 'Student'
    }),
   
}
function mostraPorta(){
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/woman', mostraWoman))
app.listen(porta, mostraPorta)