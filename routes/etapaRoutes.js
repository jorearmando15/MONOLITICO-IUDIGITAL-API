const express = require('express');
const router = express.Router();
const etapaController = require('../controllers/etapaControllers');

router.get('/', etapaController.getEtapaAll);
router.get('/:id', etapaController.getEtapaById);
router.post('/', etapaController.crearEtapa);
router.put('/:id', etapaController.actualizarEtapa);
router.delete('/:id', etapaController.eliminarEtapa);

module.exports = router;
