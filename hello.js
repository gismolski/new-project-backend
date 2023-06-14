const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraHello(request, response){
    response.send("Hello, World!")
}
function mostraPorta(){
    console.log('Servidor criado e rodando na porta', porta)
}


app.use(router.get('/hello', mostraHello))
app.listen(porta, mostraPorta)