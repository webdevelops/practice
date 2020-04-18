let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(obj) {
  let sum = 0;
  
  for (let selery of Object.values(obj)) {
    sum += selery;
  }
  
  return sum;
}

console.log("sumSalaries -> sumSalaries", sumSalaries(salaries));