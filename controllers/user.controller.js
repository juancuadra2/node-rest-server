const { response } = require('express');

const getUsuario = (req = request, res = response) => {
    const query = req.query;
    res.status(200).json({
        msg: "GET Method.",
        query
    });
}

const createUsuario = (req, res = response) => {
    const body = req.body;
    res.status(201).json({
        msg: "POST Method.",
        body
    });
}

const uptadeUsuario = (req, res = response) => {
    const id = req.params.id;
    res.status(200).json({
        msg: 'PUT Method.',
        id
    });
}

const deleteUsuario = (req, res = response) => {
    res.status(200).json({
        msg: 'DELETE Method.'
    });
}

module.exports = {
    getUsuario,
    createUsuario,
    uptadeUsuario,
    deleteUsuario
}