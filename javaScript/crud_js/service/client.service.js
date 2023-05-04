const listaCliente = () =>
  fetch("http://localhost:3000/perfil").then((response) => response.json());

const crearCliente = (nombre, email) =>
  fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};

const detallerCliente = (id) =>
  fetch(`http://localhost:3000/perfil/${id}`).then((response) =>
    response.json()
  );

const actualizarCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email }),
  }).then((response) => console.log(response.json));
};
export const clientService = {
  listaCliente,
  crearCliente,
  eliminarCliente,
  detallerCliente,
  actualizarCliente,
};
