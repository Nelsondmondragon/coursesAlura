// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header";
import Formulario from "./components/formulario/Formulario";
import MiOrg from "./components/miOrg";
function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  return (
    <div className="App">
      <Header />
      {mostrarFormulario && <Formulario />}

      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
