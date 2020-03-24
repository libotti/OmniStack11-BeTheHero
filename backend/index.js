const express = require('express');

const app = express();

//ROTAS
app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana Omni Stack 11',
        aluno: 'Robert Libotti'
    })
})


app.listen(3333);