const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteControllers');

router.get('/', clienteController.getClienteAll);
router.get('/:id', clienteController.getClienteById);
router.post('/', clienteController.crearCliente);
router.put('/:id', clienteController.actualizarCliente);
router.delete('/:id', clienteController.eliminarCliente);

module.exports = router;
