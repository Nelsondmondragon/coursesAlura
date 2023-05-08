import "./Formulario.css";
import { useState } from "react";
import Input from "../inputs";
import Select from "../select";
import Button from "../button";

const Formulario = (props) => {
  // console.log(props);
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const [titulo, setTitulo] = useState("");
  const [primario, setColor] = useState("");

  const { registrarColaborador, registrarEquipo } = props;

  const manejarEnvio = (event) => {
    event.preventDefault();

    let datosEnvio = {
      nombre,
      puesto,
      foto,
      equipo,
    };

    registrarColaborador(datosEnvio);
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    let equipoEnviar = {
      titulo,
      primario,
    };
    // console.log(equipoEnviar);
    registrarEquipo(equipoEnviar);
  };

  return (
    <section className="form">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Input
          titulo="Nombre"
          placeholder="Ingrese nombre"
          required
          value={nombre}
          setValor={setNombre}
        />
        <Input
          titulo="Puesto"
          placeholder="Ingrese Puesto"
          required
          value={puesto}
          setValor={setPuesto}
        />
        <Input
          titulo="Foto"
          placeholder="Ingrese enlace de foto"
          required
          value={foto}
          setValor={setFoto}
        />
        <Select equipos={props.equipos} value={equipo} setValor={setEquipo} />
        <Button titulo="Crear" />
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Input
          titulo="Titulo"
          placeholder="Ingrese titulo"
          required
          value={titulo}
          setValor={setTitulo}
        />
        <Input
          titulo="Color"
          placeholder="Ingresar el color en hex"
          required
          value={primario}
          setValor={setColor}
          type={"color"}
        />
        <Button titulo="Registrar equipo" />
      </form>
    </section>
  );
};

export default Formulario;
