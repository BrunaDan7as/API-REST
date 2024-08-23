// importando o express
const express = require('express')

// criando uma instancia express com o nome app
const app = express()

// definir a porta do projeto
const port = 3001

// criar rota padrão ou raiz

app.get('/', (req, res) => {
    res.send('Curso de Node JS')
})

// escutar porta

app.listen(port, () =>{
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})  
