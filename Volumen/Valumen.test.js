test("volumenEsfera", function () {
    if("debería calcular el volumen de una esfera correctamente", function () {
      expec.approximately(volumenEsfera(3), 113.097, 0.001); 
    });
  
    if("debería manejar radios no positivos", function () {
      expec.equal(volumenEsfera(0), "El radio debe ser un número positivo.");
    });
  });

  const volumenEsfera = require('./VolumenEsfera.js')