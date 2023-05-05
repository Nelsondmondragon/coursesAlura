import "./Formulario.css";
import Input from "../inputs";
import Select from "../select/Select";

const Formulario = () => {
  return (
    <section className="form">
      <form>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Input titulo="Nombre" placeholder="Ingrese nombre" />
        <Input titulo="Puesto" placeholder="Ingrese Puesto" />
        <Input titulo="Foto" placeholder="Ingrese enlace de foto" />
        <Select />
      </form>
    </section>
  );
};

export default Formulario;
