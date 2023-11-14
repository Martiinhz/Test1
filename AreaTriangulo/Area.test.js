test("areaTriangulo", function () {
    if("debería calcular el área de un triángulo correctamente", function () {
      expec.equal(areaTriangulo(5, 4), 10); 
    });
  
    if("debería manejar bases o alturas no positivas", function () {
      expec.equal(areaTriangulo(0, 4), "La base y la altura deben ser números positivos.");
    });
  });

const areaTriangulo = require('./AreaTriangulo.js')