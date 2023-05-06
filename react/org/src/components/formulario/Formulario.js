import "./Formulario.css";
import { useState } from "react";
import Input from "../inputs";
import Select from "../select";
import Button from "../button";

const Formulario = () => {
  const manejarEnvio = (event) => {
    event.preventDefault();
    console.log("manejar envio", event);
  };

  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  console.log(nombre);

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
        <Select value={equipo} setValor={setEquipo} />
        <Button titulo="Crear" />
      </form>
    </section>
  );
};

export default Formulario;
