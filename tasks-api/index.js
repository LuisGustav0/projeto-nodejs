const express = require('express')

const App = express()

App.get('/', (req, res) => {
    res.status(200).send('Meu backend!')
})

App.listen(3000, () => {
    console.log('Backend executando...')
})