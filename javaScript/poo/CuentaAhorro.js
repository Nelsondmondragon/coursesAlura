export class CuentaAhorro {
  #cliente;
  #saldo;

  constructor(cliente, numero, agenda, saldo) {
    this.numero = numero;
    this.agencia = agenda;
    this.#cliente = cliente;
    this.#saldo = saldo;
  }
}
