import express from 'express';
import reservasRoutes from './routes/reservas.routes.js';
const app = express();
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