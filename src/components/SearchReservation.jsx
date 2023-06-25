import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import { Button, Card, CardBody, FormGroup, Input, Label } from 'reactstrap'
import { FaCheck, FaEdit } from "react-icons/fa";

export default function SearchReservation() {
  // Hooks para detectar el cambio en los componentes del formulario
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const handleChangeNombre = (event) => {
    const nombreValue = event.target.value;
    setNombre(nombreValue);
  };
  const handleChangeApellido = (event) => {
    const apellidoValue = event.target.value;
    setApellido(apellidoValue);
  };
  const handleSubmit = async () => {
    if (
      nombre.length > 0 &&
      apellido.length > 0
    ) {
      const formData = {
        nombre,
        apellido,
      };

      try {
        const response = await fetch("http://localhost:3001/api/reserva/crearReserva", {
          method: "POST", // O el método que corresponda (GET, PUT, DELETE, etc.)
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("La solicitud fue exitosa")
        } else {
          // La solicitud falló
          // Maneja el error de acuerdo a tus necesidades
        }
      } catch (error) {
        // Maneja cualquier error de red u otra excepción
      }
    } else {
      alert("Completa todos los campos");
    }
  };
  return (
    <>
        <h1 className='text-center'>Search Reservation</h1>
        <div className="container">
        <Card id="reservas">
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="">Nombre</Label>
                <Input
                  id="nombreInput"
                  name=""
                  placeholder="Digita tu nombre"
                  type="text"
                  onChange={handleChangeNombre}
                />
              </FormGroup>
              <FormGroup>
                <Label for="">Apellidos</Label>
                <Input
                  id="apellidoInput"
                  name=""
                  placeholder="Digita tus apellidos"
                  type="text"
                  onChange={handleChangeApellido}
                />
              </FormGroup>
              <FormGroup>
                <Button
                  className="btn btn-success btn-block"
                  onClick={handleSubmit}
                >
                  Reservar <FaCheck />
                </Button>
              </FormGroup>
              <FormGroup>
                <Button className="btn btn-secondary btn-block">
                  Editar reserva <FaEdit />
                </Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  )
}
