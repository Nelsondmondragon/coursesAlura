import "./Select.css";

const Select = (props) => {
  const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];

  const setValue = (event) => {
    const equi = event.target.value;
    props.setValor(equi);
  };

  return (
    <div className="select">
      <label>Equipos</label>
      <select value={props.value} onChange={setValue}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {equipos.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
