const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database/db'); // Ruta relativa al archivo db.js
const tipoProyectoRoutes = require('./routes/tipoProyectoRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const etapaRoutes = require('./routes/etapaRoutes');
const universidadRoutes = require('./routes/universidadRoutes');
const { PORT } = require('./config/config');

// Obtener express
const app = express();

// Middleware
app.use(bodyParser.json());

// Conectar a la base de datos
connectDB();

// Rutas para la entidad de Tipo Proyecto
app.use('/tipo-proyecto', tipoProyectoRoutes);

// Rutas para la entidad de Cliente
app.use('/cliente', clienteRoutes);

// Rutas para la entidad de Universidad
app.use('/universidad', universidadRoutes);

// Rutas para la entidad de Etapa
app.use('/etapa', etapaRoutes);

// Obtener Puerto
app.listen(PORT, () => {
  console.log('Servidor escuchando en', PORT);
});
