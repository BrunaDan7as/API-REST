// importando o express
const express = require('express')

// criando uma instancia express com o nome app
const app = express()

// definir a porta do projeto
const port = 3000

// criar rota padrão ou raiz

app.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

// escutar porta

app.listen(port, () =>{
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})  
