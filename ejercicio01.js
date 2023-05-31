function next_pal(numero) {
    numero = numero + 1; // Incrementar el número para buscar el siguiente
    
    while (!esPalindromo(numero.toString())) {
      numero++; // Incrementar el número hasta encontrar un palíndromo
    }
    
    return numero;
  }
  
  function esPalindromo(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  // Ejemplo de uso
  const numeroInicial = 3443
  const siguientePalindromo = next_pal(numeroInicial);
  console.log("El siguiente número palíndromo después de " + numeroInicial + " es: " + siguientePalindromo);
  
