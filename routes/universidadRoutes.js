const express = require('express');
const router = express.Router();
const universidadController = require('../controllers/universidadControllers');

router.get('/', universidadController.getUniversidadAll);
router.get('/:id', universidadController.getUniversidadById);
router.post('/', universidadController.crearUniversidad);
router.put('/:id', universidadController.ActualizarUniversidad);
router.delete('/:id', universidadController.eliminarUniversidad);

module.exports = router;
