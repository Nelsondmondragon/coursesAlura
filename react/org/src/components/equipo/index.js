import "./equipo.css";
import Colaborador from "../colaborador";
import hexToRgba from "hex-to-rgba";
const Equipo = (props) => {
  const { id, primario } = props.equipo;
  const secundario = hexToRgba(primario, "0.6");
  const { colaboradores, deleteColaborador, updateColorEquipo, updateFav } =
    props;

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={{ backgroundColor: secundario }}>
          <input
            onChange={(event) => updateColorEquipo(event.target.value, id)}
            type="color"
            className="input-color"
            value={primario}
          />
          <h3 style={{ borderColor: primario }}>{props.equipo.titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((item, index) => {
              return (
                <Colaborador
                  primario={primario}
                  colaborador={item}
                  key={index}
                  deleteColaborador={deleteColaborador}
                  updateFav={updateFav}
                />
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
