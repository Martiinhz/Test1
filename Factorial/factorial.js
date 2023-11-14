function factorial(numero) {
    if (numero < 0) {
      return "El factorial no está definido para números negativos.";
    }
    if (numero === 0) {
      return 1;
    }
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
      resultado *= i;
    }
    return resultado;
  }

  module.exports = factorial;