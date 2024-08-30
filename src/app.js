// importando o express
import express from 'express'

// criando uma instancia express com o nome app
const app = express()

// indicar pro express ler body com json
app.use(express.json())

//mock

const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suíça', grupo: 'G'},
    {id: 3, selecao: 'Sérvia', grupo: 'G'},
    {id: 4, selecao: 'Camarões', grupo: 'G'},
]

function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

// pegar a posição do elemento no array
function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}

// criar rota padrão ou raiz

app.get('/', (req, res) => {
    res.send('Curso de Node JS')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req, res) => {
    let index = req.params.id
    res.json(buscarSelecaoPorId(index))
})


app.post('/selecoes', (req, res) => {
    selecoes.push(req.body)
    res.status(201).send('Coleções cadastradas com sucesso!')
})

app.delete('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send(`Seleção com o id ${req.params.id} excluída com sucesso`)
})

app.put('/selecoes/:id', (req, res) => {
    let index = buscarIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo = req.body.grupo
    res.json(selecoes)
})


export default app

