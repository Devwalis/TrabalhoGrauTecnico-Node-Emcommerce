const express = require('express');
const app = express();

//Rota que retorna uma resposta JSON
app.get( '/', (req, res) =>{
    res.status(200).json({message: 'Hello, JSON!'});

});

//O Servidor vai escutar na porta 3000
app.listen(3000, () =>{
    console.log('Servidor rodando na porta 3000');
})