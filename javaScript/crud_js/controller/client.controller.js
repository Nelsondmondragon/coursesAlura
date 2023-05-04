import { clientService } from "../service/client.service.js";

console.log(clientService);
const crearNuevaLinea = (nombre, email, id) => {
  const linea = document.createElement("tr");
  const contenido = `
      <td class="td" data-td>
        ${nombre}
      </td>
      <td>${email}</td>
      <td>
        <ul class="table__button-control">
          <li>
            <a
              href="../screens/editar_cliente.html?id=${id}"
              class="simple-button simple-button--edit"
            >
              Editar
            </a>
          </li>
          <li>
            <button class="simple-button simple-button--delete" type="button" >
              Eliminar
            </button>
          </li>
        </ul>
      </td>
    `;
  linea.innerHTML = contenido;
  const btn = linea.querySelector("button");
  btn.addEventListener("click", () => {
    clientService
      .eliminarCliente(id)
      .then((reponse) => {
        console.log(reponse);
      })
      .catch((err) => console.log(err));
  });
  return linea;
};

const table = document.querySelector("[data-table]");

const listaCliente = () =>
  fetch("http://localhost:3000/perfil").then((response) => response.json());

clientService
  .listaCliente()
  .then((data) => {
    data.forEach(({ nombre, email, id }) => {
      table.appendChild(crearNuevaLinea(nombre, email, id));
    });
  })
  .catch((error) => {
    alert("error");
  });
