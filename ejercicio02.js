function createPhoneNumber(numbers) {
    if (numbers.length !== 10) {
      return "El número de teléfono debe tener 10 dígitos.";
    }
  
    const formattedNumber = "(";
    for (const i = 0; i < numbers.length; i++) {
      if (i === 3) {
        formattedNumber += ") ";
      } else if (i === 6) {
        formattedNumber += "-";
      }
      formattedNumber += numbers[i];
    }
  
    return formattedNumber;
  }
  
  const phoneNumber1 = createPhoneNumber([5, 5, 5, 1, 3, 4, 7, 8, 9, 0]);
  console.log(phoneNumber1); // (555) 134-7890
  
  const phoneNumber2 = createPhoneNumber([3, 0, 5, 1, 2, 7, 7, 2, 4, 9]);
  console.log(phoneNumber2); // (305) 127-7249
  
  const phoneNumber3 = createPhoneNumber([4, 5, 0, 2, 3, 9, 5, 4, 5, 7]);
  console.log(phoneNumber3); // (305) 127-7249