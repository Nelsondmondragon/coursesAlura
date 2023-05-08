import "./Select.css";

const Select = (props) => {
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
        {props.equipos.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
