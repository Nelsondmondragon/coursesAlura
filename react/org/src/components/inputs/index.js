import "./Input.css";

const Input = (props) => {
  const placeholderEdit = `${props.placeholder}...`;

  const updateValor = (event) => {
    props.setValor(event.target.value);
  };

  return (
    <div className="input-text">
      <label>{props.titulo}</label>
      <input
        placeholder={placeholderEdit}
        required={props.required}
        onChange={updateValor}
      />
    </div>
  );
};

export default Input;
