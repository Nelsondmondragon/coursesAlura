import "../assets/css/blog.css";
import ListCategorias from "../components/ListaCategoria";
import ListPosts from "../components/ListPosts";

import {
  useParams,
  Routes,
  Route,
  Link,
  useResolvedPath,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { buscar } from "../api/api";
import SubCategoria from "./Subcategoria";
const Categoria = () => {
  const [subCategorias, setSubCategorias] = useState([]);
  const { id } = useParams();

  const url = useResolvedPath("").pathname;
  // console.log(url);

  useEffect(() => {
    buscar(`/categorias?id=${id}`, (response) => {
      // console.log(response);
      setSubCategorias(response[0].subcategorias);
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="title-page">Pet Noticias</h2>
      </div>
      <ListCategorias />
      <ul className="category-list container flex">
        {subCategorias.map((subcategoria) => (
          <li
            className={`category-list__category category-list__category--${id}`}
            key={subcategoria}
          >
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route
          path="/"
          element={<ListPosts url={`/posts?categoria=${id}`} />}
        />

        <Route path="/:subcategoria" element={<SubCategoria />} />
      </Routes>
    </>
  );
};

export default Categoria;
