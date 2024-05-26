// tipoProyectoController.js
const TipoProyecto = require('../models/tipoProyectoModels');

class TipoProyectoController {
  
  async getTipoProyectoAll(req, res) {
    try {
      const tiposProyecto = await TipoProyecto.find();
      console.log('Todos los tipos de proyecto fueron obtenidos correctamente.');
      res.json(tiposProyecto);
    } catch (error) {
      console.error("Error al obtener los tipos de proyecto:", error);
      res.status(500).json({ message: 'Se produjo un error interno al obtener los tipos de proyecto.' });
    }
  }

  async getTipoProyectoById(req, res) {
    const id = req.params.id;
    try {
      const tipoProyecto = await TipoProyecto.findById(id);
      if (!tipoProyecto) {
        return res.status(404).json({ message: 'Tipo de proyecto no encontrado.' });
      }
      console.log('Tipo de proyecto obtenido por ID correctamente.');
      res.json(tipoProyecto);
    } catch (error) {
      console.error("Error al obtener el tipo de proyecto por ID:", error.message);
      res.status(500).json({ error: 'Se produjo un error interno al obtener el tipo de proyecto.' });
    }
  }

  async crearTipoProyecto(req, res) {
    try {
      const tipoProyecto = new TipoProyecto(req.body);
      const newTipoProyecto = await TipoProyecto.save();
      if(!newTipoProyecto){
        console.error("Error al crear el tipo de proyecto:");
        res.status(400).json({ message: 'Error al crear el tipo de proyecto.' });
      }
      console.log('Tipo de proyecto creado exitosamente.');
      res.status(201).json({ message: 'Tipo de proyecto creado exitosamente.'});
    } catch (error) {
      console.error("Error al crear el tipo de proyecto:", error.message);
      res.status(400).json({ message: 'Error al crear el tipo de proyecto.', error: error.message });
    }
  }

  async actualizarTipoProyecto(req, res) {
    try {
      const tipoProyecto = await TipoProyecto.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!tipoProyecto) {
        console.log('Tipo de proyecto no encontrado para actualizar.');
        return res.status(404).json({ message: 'Tipo de proyecto no encontrado.' });
      }
      console.log('Tipo de proyecto actualizado exitosamente.');
      res.json({ message: 'Tipo de proyecto actualizado exitosamente.'});
    } catch (error) {
      console.error("Error al actualizar el tipo de proyecto:", error.message);
      res.status(400).json({ message: 'Error al actualizar el tipo de proyecto.', error: error.message });
    }
  }

  async eliminarTipoProyecto(req, res) {
    try {
      const tipoProyecto = await TipoProyecto.findByIdAndDelete(req.params.id);
      if (!tipoProyecto) {
        console.log('Tipo de proyecto no encontrado para eliminar.');
        return res.status(404).json({ message: 'Tipo de proyecto no encontrado.' });
      }
      console.log('Tipo de proyecto eliminado exitosamente.');
      res.json({ message: 'Tipo de proyecto eliminado exitosamente.' });
    } catch (error) {
      console.error("Error al eliminar el tipo de proyecto:", error.message);
      res.status(500).json({ message: 'Se produjo un error interno al eliminar el tipo de proyecto.', error: error.message });
    }
  }
}

module.exports = new TipoProyectoController();
