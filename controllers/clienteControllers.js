const Cliente = require('../models/cliente.Models');

class ClientesController {
  async getClienteAll(req, res) {
    try {
      const clientes = await Cliente.find();
      if (!clientes || clientes.length === 0) {
        console.log('No se encontraron clientes.');
        return res.status(404).json({ message: 'No se encontraron clientes.' });
      }
      console.log('Todos los clientes fueron obtenidos correctamente.');
      res.json(clientes);
    } catch (error) {
      console.error("Error al obtener los clientes:", error.message);
      res.status(500).json({ message: 'Error interno del servidor al obtener los clientes.', error: error.message });
    }
  }

  async getClienteById(req, res) {
    const id = req.params.id;
    try {
      const cliente = await Cliente.findById(id);
      if (!cliente) {
        console.log('Cliente no encontrado.');
        return res.status(404).json({ message: 'Cliente no encontrado.' });
      }
      console.log('Cliente obtenido por ID correctamente.');
      res.json(cliente);
    } catch (error) {
      console.error("Error al obtener el cliente por ID:", error.message);
      res.status(500).json({ message: 'Error interno del servidor.', error: error.message });
    }
  }

  async crearCliente(req, res) {
    try {
      const cliente = new Cliente(req.body);
      const newCliente = await cliente.save();
      if (!newCliente) {
        console.log('No se pudo crear el cliente.');
        return res.status(400).json({ message: 'No se pudo crear el cliente.' });
      }
      console.log('Cliente creado exitosamente.');
      res.status(201).json({ message: 'Cliente creado exitosamente.' });
    } catch (error) {
      console.error("Error al crear el cliente:", error.message);
      res.status(400).json({ message: 'Error al crear el cliente.', error: error.message });
    }
  }

  async actualizarCliente(req, res) {
    try {
      const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!cliente) {
        console.log('Cliente no encontrado para actualizar.');
        return res.status(404).json({ message: 'Cliente no encontrado.' });
      }
      console.log('Cliente actualizado exitosamente.');
      res.json({ message: 'Cliente actualizado exitosamente.'});
    } catch (error) {
      console.error("Error al actualizar el cliente:", error.message);
      res.status(400).json({ message: 'Error al actualizar el cliente.', error: error.message });
    }
  }

  async eliminarCliente(req, res) {
    try {
      const cliente = await Cliente.findByIdAndDelete(req.params.id);
      if (!cliente) {
        console.log('Cliente no encontrado para eliminar.');
        return res.status(404).json({ message: 'Cliente no encontrado.' });
      }
      console.log('Cliente eliminado exitosamente.');
      res.json({ message: 'Cliente eliminado exitosamente.' });
    } catch (error) {
      console.error("Error al eliminar el cliente:", error.message);
      res.status(500).json({ message: 'Error interno del servidor al eliminar el cliente.', error: error.message });
    }
  }
}

module.exports = new ClientesController();
