function countNameRepetitions(names) {
    const nameCount = {};
    
    for ( i = 0; i < names.length; i++) {
      const name = names[i];
      if (nameCount[name]) {
        nameCount[name]++;
      } else {
        nameCount[name] = 1;
      }
    }
    
    const result = {};
    
    for (const name in nameCount) {
      const count = nameCount[name];
      result[name] = "*".repeat(count);
    }
    
    return result;
  }
  
  const names = ["John", "Jane", "John", "Mary", "Jane", "John","Carlos","Mary",
  "camila", "Jhon", "Jefe Mestro", "Halo", "Halo", "John", "Mary", "Jane", "Carlos"];
  const nameRepetitions = countNameRepetitions(names);
  console.log(nameRepetitions);
  