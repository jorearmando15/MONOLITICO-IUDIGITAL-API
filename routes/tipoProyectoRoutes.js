const express = require('express');
const router = express.Router();
const tipoProyectoController = require('../controllers/tipoProyectoControllers');

router.get('/', tipoProyectoController.getTipoProyectoAll);
router.get('/:id', tipoProyectoController.getTipoProyectoById);
router.post('/', tipoProyectoController.crearTipoProyecto);
router.put('/:id', tipoProyectoController.actualizarTipoProyecto);
router.delete('/:id', tipoProyectoController.eliminarTipoProyecto);

module.exports = router;
