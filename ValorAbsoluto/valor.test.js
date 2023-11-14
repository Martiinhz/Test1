test("valorAbsoluto", function () {
    if("debería calcular el valor absoluto correctamente", function () {
      expec.equal(valorAbsoluto(5), 5);
      expec.equal(valorAbsoluto(-5), 5);
    });
  });

  const valorAbsoluto = require('./ValorAbsoluto.js')