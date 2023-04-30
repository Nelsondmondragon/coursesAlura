export class Cuenta {
  #cliente;
  #saldo;

  constructor(tipo, cliente, numero, agenda, saldo) {
    this.numero = numero;
    this.agencia = agenda;
    this.#cliente = cliente;
    this.#saldo = saldo;
    this.tipo = tipo;
  }

  depositoCuenta(valor) {
    this.#saldo += valor;
    return this.#saldo;
  }

  retirarCuenta(valor) {
    console.log(this.tipo);
    if (this.tipo == "corriente") {
      valor = valor + valor * 0.2;
    }
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
    }
    return this.#saldo;
  }

  verSaldo() {
    return this.#saldo;
  }
}
