const express = require('express');
const router = express.Router();
const endereco = require('../models/Endereco');

// Rota de teste
router.get("/teste", (req, res) => {
    res.send("Rota teste esta funcionando");
});

// Adicionar novo endereço
router.post('/add', (req, res) => {
    console.log(req.body)
    const { NomePontoDeColeta, EnderecoPontoDeColeta, Email, TipoDeColeta, ImagemDoPonto } = req.body;

    endereco.create({
        NomePontoDeColeta,
        EnderecoPontoDeColeta,
        Email,
        TipoDeColeta,
        ImagemDoPonto
    })
    .then(() => res.redirect('/')) 
    .catch(err => {
        console.log(err);
        res.status(500).send("Erro ao adicionar o endereço");
    });
});

module.exports = router;