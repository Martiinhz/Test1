test("factorial", function () {
    if("debería calcular el factorial correctamente", function () {
      expec.equal(factorial(5), 120);
      expec.equal(factorial(0), 1);
    });
  
    if("debería manejar números negativos", function () {
      expec.equal(factorial(-5), "El factorial no está definido para números negativos.");
    });
  });

  const factorial = require('./factorial.js')