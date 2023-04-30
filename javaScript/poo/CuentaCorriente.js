export class CuentaCorriente {
  #saldo;
  numero;
  agencia;

  constructor() {
    this.#saldo = 0;
    this.numero = "";
    this.agencia = "";
  }

  depositoCuenta(valor) {
    this.#saldo += valor;
    return this.#saldo;
  }

  retirarCuenta(valor) {
    if (valor <= this.valor) {
      this.#saldo -= valor;
    }
    return this.#saldo;
  }

  verSaldo() {
    return this.#saldo;
  }
}
