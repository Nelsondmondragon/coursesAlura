import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuenta.js";

const nelson = new Cliente("Nelson", "111111", "23232");
const maria = new Cliente("Maria Juan", "111111", "23232");

let cuentaCorriente = new Cuenta("corriente", maria, "1", "001", 0);

cuentaCorriente.depositoCuenta(600);
cuentaCorriente.retirarCuenta(200);

console.log("El saldo " + cuentaCorriente.verSaldo());
