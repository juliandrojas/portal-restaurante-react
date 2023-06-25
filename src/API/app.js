import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import reservasRoutes from './routes/reservas.routes.js';
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
//Hacemos que entienda JSON
app.use(express.json());
//Usamos las rutas
app.use('/api/reserva', reservasRoutes);
//Not found route
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})
export default app;