import "./assets/css/base/base.css";
import "./assets/css/componentes/card.css";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Page404 from "./pages/Page404";
import Header from "./components/Header";
import Post from "./pages/Post";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categoria from "./pages/Categoria";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/posts/:id" element={<Post />}></Route>
        <Route path="/categorias/:id/*" element={<Categoria />}></Route>

        <Route path="*" element={<Page404></Page404>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
