function areaTriangulo(base, altura) {
    if (base <= 0 || altura <= 0) {
      return "La base y la altura deben ser números positivos.";
    }
    return (base * altura) / 2;
  }

  module.exports = areaTriangulo;