// universidadController.js
const Universidad = require('../models/universidadModels');

class UniversidadController {
  async getUniversidadAll(req, res) {
    try {
      const universidades = await Universidad.find();
      console.log('Todas las universidades fueron obtenidas correctamente.');
      res.json(universidades);
    } catch (error) {
      console.error("Error al obtener las universidades:", error);
      res.status(500).json({ message: 'Se produjo un error interno al obtener las universidades.' });
    }
  }

  async getUniversidadById(req, res) {
    const id = req.params.id;
    try {
      const universidad = await Universidad.findById(id);
      if (!universidad) {
        return res.status(404).json({ message: 'Universidad no encontrada.' });
      }
      console.log('Universidad obtenida por ID correctamente.');
      res.json(universidad);
    } catch (error) {
      console.error("Error al obtener la universidad por ID:", error.message);
      res.status(500).json({ error: 'Se produjo un error interno al obtener la universidad.' });
    }
  }

  async crearUniversidad(req, res) {
    try {
      const universidad = new Universidad(req.body);
      const newUniversidad = await universidad.save();
      if(!newUniversidad){
        console.error("Error al crear la universidad:");
        res.status(400).json({ message: 'Error al crear la universidad.' });
      }
      console.log('Universidad creada exitosamente.');
      res.status(201).json({ message: 'Universidad creada exitosamente.'});
    } catch (error) {
      console.error("Error al crear la universidad:", error.message);
      res.status(400).json({ message: 'Error al crear la universidad.', error: error.message });
    }
  }

  async ActualizarUniversidad(req, res) {
    try {
      const universidad = await Universidad.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!universidad) {
        console.log('Universidad no encontrada para actualizar.');
        return res.status(404).json({ message: 'Universidad no encontrada.' });
      }
      console.log('Universidad actualizada exitosamente.');
      res.json({ message: 'Universidad actualizada exitosamente.'});
    } catch (error) {
      console.error("Error al actualizar la universidad:", error.message);
      res.status(400).json({ message: 'Error al actualizar la universidad.', error: error.message });
    }
  }

  async eliminarUniversidad(req, res) {
    try {
      const universidad = await Universidad.findByIdAndDelete(req.params.id);
      if (!universidad) {
        console.log('Universidad no encontrada para eliminar.');
        return res.status(404).json({ message: 'Universidad no encontrada.' });
      }
      console.log('Universidad eliminada exitosamente.');
      res.json({ message: 'Universidad eliminada exitosamente.' });
    } catch (error) {
      console.error("Error al eliminar la universidad:", error.message);
      res.status(500).json({ message: 'Se produjo un error interno al eliminar la universidad.', error: error.message });
    }
  }
}

module.exports = new UniversidadController();
