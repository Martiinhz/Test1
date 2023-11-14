const division = require('./division.js')

test("division", function () {
    if("debería calcular la división de dos números correctamente", function () {
      expect.equal(division(10, 2), 5);
    });
  
    if("debería manejar la división por cero", function () {
      expect.equal(division(5, 0), "No se puede dividir por cero.");
    });
  });

