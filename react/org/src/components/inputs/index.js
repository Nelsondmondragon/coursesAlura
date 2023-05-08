import "./Input.css";

const Input = (props) => {
  const placeholderEdit = `${props.placeholder}...`;

  const { type = "text" } = props;

  const updateValor = (event) => {
    props.setValor(event.target.value);
  };

  return (
    <div className={`inputt inputt-${type}`}>
      <label>{props.titulo}</label>
      <input
        placeholder={placeholderEdit}
        required={props.required}
        onChange={updateValor}
        type={type}
      />
    </div>
  );
};

export default Input;
