import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const buscar = async (url, setData) => {
  //   console.log(url);
  const response = await api.get(url);
  setData(response.data);
};
