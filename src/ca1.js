let array1 = [
    { name: "Pallavi", department: "Sales", yearsOfExperience: 6 },
    { name: "Sahil", department: "Marketing", yearsOfExperience: 4 },
  ];
  
  let array2 = [
    { name: "Neelam", department: "IT", yearsOfExperience: 8 },
    { name: "Anjali", department: "Marketing", yearsOfExperience: 10 },
  ];
  
  let mergedEmployees = [...array1, ...array2];
  
  let experiencedEmployees = mergedEmployees.filter(employee => employee.yearsOfExperience >= 5);
  
  let marketingIndex = mergedEmployees.findIndex(employee => employee.department === 'Marketing');
  
  let sortedEmployees = experiencedEmployees.sort((a, b) => b.yearsOfExperience - a.yearsOfExperience);
  
  let employeeNames = sortedEmployees.map(employee => employee.name);
  
  console.log(employeeNames);
  console.log(marketingIndex);