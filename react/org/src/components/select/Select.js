import "./Select.css";

const Select = () => {
  const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];

  return (
    <div className="select">
      <label>Equipos</label>
      <select>
        {equipos.map((item, index) => {
          return <option>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
