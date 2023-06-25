//Importamos el modelo
import Reserva from '../model/reserva.model.js';
export const crearReserva = async(req, res) => {
    console.log("Seccion de creación de reserva");
    console.log(req.body);
    //Destructuramos el arreglo del request.body
    const { nombre, apellido, correo, telefono, acompanantes, fecha, hora, observaciones } = req.body;
    console.log("Datos insertados: "+nombre, apellido, correo, telefono, acompanantes, fecha, hora, observaciones);
    //Guardamos la información en una constante
    const newReserva = new Reserva({nombre, apellido, correo, telefono, acompanantes, fecha, hora, observaciones});
    //Guardamos la reserva en la base de datos
    const reservaGuardada = await newReserva.save()
    res.status(201).json(reservaGuardada);
}
export const consultarReserva = async(req, res) => {
    res.json("Consultar reserva")
}