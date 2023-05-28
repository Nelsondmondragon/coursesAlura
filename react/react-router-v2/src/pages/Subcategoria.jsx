import ListPosts from "../components/ListPosts";
import { useParams } from "react-router-dom";

const SubCategoria = () => {
  const { subcategoria } = useParams();
  return <ListPosts url={`/posts?subcategoria=${subcategoria}`} />;
};

export default SubCategoria;
