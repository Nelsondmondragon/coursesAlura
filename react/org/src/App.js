// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";
import Formulario from "./components/formulario/Formulario";
import MiOrg from "./components/miOrg";
import Equipo from "./components/equipo";
import Footer from "./components/footer";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuidv4(),
      nombre: "Nelson Cortes",
      puesto: "Estudiante",
      foto: "https://github.com/nelsondmondragon.png",
      equipo: "Programación",
      fav: false,
    },
    {
      id: uuidv4(),

      nombre: "Cristian",
      puesto: "Estudiante",
      foto: "https://github.com/Cristiancm49.png",
      equipo: "Front End",
      fav: false,
    },
    {
      id: uuidv4(),

      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: false,
    },
    {
      id: uuidv4(),

      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false,
    },
    {
      id: uuidv4(),

      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false,
    },
    {
      id: uuidv4(),

      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: uuidv4(),

      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: true,
    },
  ]);

  const [equipos, actualizarEquipo] = useState([
    {
      id: uuidv4(),

      titulo: "Programación",
      primario: "#57C278",
      secundario: "#D9F7E9",
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      primario: "#82CFFA",
      secundario: "#E8F8FF",
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      primario: "#A6D157",
      secundario: "#F0F8E2",
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      primario: "#E06B69",
      secundario: "#FDE7E8",
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      primario: "#DB6EBF",
      secundario: "#FAE9F5",
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      primario: "#FFBA05",
      secundario: "#FFF5D9",
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      primario: "#FF8A29",
      secundario: "#FFEEDF",
    },
  ]);

  const deleteColaborador = (id) => {
    console.log("Id", id);
    actualizarColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );

    // console.log("Delete", id);
  };

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  const registrarEquipo = (equipo) => {
    // console.log("Equipo", equipo);

    actualizarEquipo([...equipos, { ...equipo, id: uuidv4() }]);

    console.log("Equipo");
    console.log(equipos);
  };

  const updateColorEquipo = (color, id) => {
    const equiposUpdate = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.primario = color;
      }
      return equipo;
    });
    actualizarEquipo(equiposUpdate);
  };

  const updateFav = (id) => {
    const colaboradoresUpdate = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });
    actualizarColaboradores(colaboradoresUpdate);
  };

  return (
    <div className="App">
      <Header />
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map(({ titulo }) => titulo)}
          registrarColaborador={registrarColaborador}
          registrarEquipo={registrarEquipo}
        />
      )}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {equipos.map((item, index) => {
        return (
          <Equipo
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.equipo === item.titulo
            )}
            equipo={item}
            key={index}
            deleteColaborador={deleteColaborador}
            updateColorEquipo={updateColorEquipo}
            updateFav={updateFav}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
