import "./Input.css";

const Input = (props) => {
  const placeholderEdit = `${props.placeholder}...`;
  return (
    <div className="input-text">
      <label>{props.titulo}</label>
      <input placeholder={placeholderEdit} />
    </div>
  );
};

export default Input;
