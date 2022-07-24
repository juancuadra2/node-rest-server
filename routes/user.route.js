const { Router } = require('express');
const { getUsuario, uptadeUsuario, createUsuario, deleteUsuario } = require('../controllers/user.controller');

const router = Router();

router.get("/", getUsuario);

router.post("/", createUsuario);

router.put("/:id", uptadeUsuario);

router.delete("/", deleteUsuario);

module.exports = router;