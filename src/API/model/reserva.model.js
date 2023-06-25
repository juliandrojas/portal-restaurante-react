import { Schema, model } from 'mongoose';
//Creamos el esquema de la reserva
const reservaSchema = new Schema({
    nombre: String,
    apellido: String,
    correo: String, 
    telefono: String,
    acompanantes: Number,
    fechaReserva: String,
    horaReserva: String,
    observaciones: String,
    estado: String
});
export default model('Reserva', reservaSchema);
