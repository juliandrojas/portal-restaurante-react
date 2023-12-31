import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
//Importamos los iconos
import { FaCheck, FaEdit } from "react-icons/fa";

function Formulary() {
  // Hooks para detectar el cambio en los componentes del formulario
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [acompanantes, setAcompanantes] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [observaciones, setObservaciones] = useState("");
  // Hook para detectar la apertura del modal para confirmacion
  const [modalOpen, setModalOpen] = useState(false);

  const handleChangeNombre = (event) => {
    const nombreValue = event.target.value;
    setNombre(nombreValue);
  };
  const handleChangeApellido = (event) => {
    const apellidoValue = event.target.value;
    setApellido(apellidoValue);
  };
  const handleChangeCorreo = (event) => {
    const correoValue = event.target.value;
    setCorreo(correoValue);
  };
  const handleChangeTelefono = (event) => {
    const telefonoValue = event.target.value;
    setTelefono(telefonoValue);
  };
  const handleChangeacompanantes = (event) => {
    const acompanantesValue = event.target.value;
    setAcompanantes(acompanantesValue);
  };
  const handleChangeFecha = (event) => {
    const fechaValue = event.target.value;
    setFecha(fechaValue);
  };
  const handleChangeHora = (event) => {
    const horaValue = event.target.value;
    setHora(horaValue);
  };
  const handleChangeObservaciones = (event) => {
    const observacionesValue = event.target.value;
    setObservaciones(observacionesValue);
  };

  const handleSubmit = async () => {
    if (
      nombre.length > 0 &&
      apellido.length > 0 &&
      correo.length > 0 &&
      telefono.length > 0 &&
      acompanantes.length > 0 &&
      fecha !== "" &&
      hora !== "" &&
      observaciones !== ""
    ) {
      setModalOpen(true);

      const formData = {
        nombre,
        apellido,
        correo,
        telefono,
        acompanantes,
        fecha,
        hora,
        observaciones,
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
      {/* Componente Formulary */}
      <h1 className="text-center">Reservas</h1>
      <h2 className="text-center font-weight-normal">
        Usa el siguiente formulario para hacer tu reserva
      </h2>
      <br />
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
                <Label for="">Correo</Label>
                <Input
                  id="correoInput"
                  name=""
                  placeholder="Digita tu correo electrónico"
                  type="email"
                  onChange={handleChangeCorreo}
                />
              </FormGroup>
              <FormGroup>
                <Label for="">Correo</Label>
                <Input
                  id=""
                  name=""
                  placeholder="Confirma tu correo electrónico"
                  type="email"
                  onChange={handleChangeCorreo}
                />
              </FormGroup>
              <FormGroup>
                <Label for="">Teléfono</Label>
                <Input
                  id=""
                  name=""
                  placeholder="Digita tu número de teléfono"
                  type="number"
                  onChange={handleChangeTelefono}
                />
              </FormGroup>
              <FormGroup>
                <Label for="">Número de acompanantes</Label>
                <Input
                  id=""
                  name=""
                  placeholder="Digita el número de acompanantes"
                  type="number"
                  onChange={handleChangeacompanantes}
                />
              </FormGroup>
              <FormGroup>
                <Label for="">Fecha de la reserva</Label>
                <Input
                  id=""
                  name=""
                  placeholder="Digita la fecha de la reserva"
                  type="date"
                  onChange={handleChangeFecha}
                />
              </FormGroup>
              <FormGroup>
                <Label for="">Hora de la reserva</Label>
                <Input
                  id=""
                  name=""
                  placeholder="Digita la hora de la reserva"
                  type="time"
                  onChange={handleChangeHora}
                />
              </FormGroup>
              <FormGroup>
                <Label for="">Observaciones</Label>
                <Input
                  id=""
                  name=""
                  placeholder="Digita si tienes alguna observación"
                  type="textarea"
                  onChange={handleChangeObservaciones}
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
      {/* Ventana modal de confirmación */}
      <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
        <ModalHeader toggle={() => setModalOpen(!modalOpen)} closebutton>
          ATENCIÓN
        </ModalHeader>
        <ModalBody>Reserva hecha con éxito</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setModalOpen(!modalOpen)}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Formulary;
