const express = require('express')
const app = express()
const bodyParser = require('body-parser')

function meuJson() {
    return (req, res, next) => {
        console.log('Meu middlewere...')
        next()
    }
}
app.use(meuJson())
app.use(bodyParser.json())

app.get('/cliente', (req, res, next) => {
    res.status(200).send(
        '[' +
            '{' +
                '\"id\": 1,' +
                '\"nome\": \"Luis Gustavo\"' +
            '},' +
            '{' +
                '\"id\": 2,' +
                '\"nome\": \"André\"' +
            '}' +
        ']'
    )
})

app.get('/cliente/:id', (req, res, next) => {
    var strJson = '';

    if (req.params.id == 1) {
        strJson =   '{' +
                        '\"id\": 1,' +
                        '\"nome\": \"Luis Gustavo\"' +
                    '}';
    } else if (req.params.id == 1) {
        strJson =   '{' +
                        '\"id\": 2,' +
                        '\"nome\": \"André\"' +
                    '}';
    } else {
        strJson = 'Não encontrado!'
    }

    res.status(200).send(
       strJson
    )
})

app.post('/cliente', (req, res) => {
    res.status(200).send(
       req.body
    )
})

app.listen(3000, () => {
    console.log('Backend executando...')
})