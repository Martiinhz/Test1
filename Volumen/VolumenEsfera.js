function volumenEsfera(radio) {
    if (radio <= 0) {
      return "El radio debe ser un número positivo.";
    }
    return (4 / 3) * Math.PI * Math.pow(radio, 3);
  }
  
  module.exports = volumenEsfera;