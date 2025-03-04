import express from 'express';
import cors from 'cors';
import { sequelize } from './config/database.js';

const app = express();
app.use(cors());
app.use(express.json());

import studentRoutes from './routes/students.js';
app.use('/students', studentRoutes);

const PORT = 3000
sequelize.sync()
    .then(() => {
        console.log('Base de datos sincronizada');
        app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
    })
    .catch(err => console.error('Error al sincronizar base de datos:', err));