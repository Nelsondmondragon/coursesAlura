import "./colaborador.css";
import { AiFillCloseSquare, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Colaborador = (props) => {
  // console.log(props.colaborador);
  const { nombre, foto, puesto, id, fav } = props.colaborador;
  const { deleteColaborador, updateFav } = props;
  return (
    <div className="colaborador">
      <AiFillCloseSquare
        className="eliminar"
        onClick={() => deleteColaborador(id)}
      />
      <div className="encabezado" style={{ backgroundColor: props.primario }}>
        <img src={foto} alt="github"></img>
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>

        {fav ? (
          <AiFillHeart color="red" onClick={() => updateFav(id)} />
        ) : (
          <AiOutlineHeart onClick={() => updateFav(id)} />
        )}
      </div>
    </div>
  );
};

export default Colaborador;
