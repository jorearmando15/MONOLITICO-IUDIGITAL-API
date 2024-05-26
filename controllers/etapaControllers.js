// etapaController.js
const Etapa = require('../models/etapaModels');

class EtapaController {
  async getEtapaAll(req, res) {
    try {
      const etapas = await Etapa.find();
      console.log('Todas las etapas fueron obtenidas correctamente.');
      res.json(etapas);
    } catch (error) {
      console.error("Error al obtener las etapas:", error);
      res.status(500).json({ message: 'Se produjo un error interno al obtener las etapas.' });
    }
  }

  async getEtapaById(req, res) {
    const id = req.params.id;
    try {
      const etapa = await Etapa.findById(id);
      if (!etapa) {
        return res.status(404).json({ message: 'Etapa no encontrada.' });
      }
      console.log('Etapa obtenida por ID correctamente')
      res.json(etapa);
    } catch (error) {
      console.error("Error al obtener la etapa por ID:", error.message);
      res.status(500).json({ error: 'Se produjo un error interno al obtener la etapa.' });
    }
  }

  async crearEtapa(req, res) {
    try {
      const etapa = new Etapa(req.body);
      const newEtapa = await etapa.save();
      if (!newEtapa) {
        console.error("Error al crear la etapa:");
        res.status(400).json({ message: 'Error al crear la etapa.'});
      }
      console.log('Etapa creada exitosamente.');
      res.status(201).json({ message: 'Etapa creada exitosamente.' });
    } catch (error) {
      console.error("Error al crear la etapa:", error.message);
      res.status(400).json({ message: 'Error al crear la etapa.', error: error.message });
    }
  }

  async actualizarEtapa (req, res) {
    try {
      const etapa = await Etapa.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!etapa) {
        console.log('Etapa no encontrada para actualizar.');
        return res.status(404).json({ message: 'Etapa no encontrada.' });
      }
      console.log('Etapa actualizada exitosamente.');
      res.json({ message: 'Etapa actualizada exitosamente.' });
    } catch (error) {
      console.error("Error al actualizar la etapa:", error.message);
      res.status(400).json({ message: 'Error al actualizar la etapa.', error: error.message });
    }
  }

  async eliminarEtapa(req, res) {
    try {
      const etapa = await Etapa.findByIdAndDelete(req.params.id);
      if (!etapa) {
        console.log('Etapa no encontrada para eliminar.');
        return res.status(404).json({ message: 'Etapa no encontrada.' });
      }
      console.log('Etapa eliminada exitosamente.');
      res.json({ message: 'Etapa eliminada exitosamente.' });
    } catch (error) {
      console.error("Error al eliminar la etapa:", error.message);
      res.status(500).json({ message: 'Se produjo un error interno al eliminar la etapa.', error: error.message });
    }
  }
}

module.exports = new EtapaController();
