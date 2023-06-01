function drawX(tamano) {
    if (tamano % 2 === 0) {
      console.log("El tamaño debe ser un número impar.");
      return;
    }
  
    for (let i = 0; i < tamano; i++) {
      let row = "";
      for (let j = 0; j < tamano; j++) {
        if (i === j || i === tamano - 1 - j) {
          row += "*";
        } else {
          row += " ";
        }
      }
      console.log(row);
    }
  }
  
  // Ejemplo de uso
  drawX(5);
  