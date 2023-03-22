function myLanguages(results) {


  return Object.entries(results).map(([key, value], index) => (value >= 60) ?
      key : undefined).filter(item => item !== undefined);
}

//написать это в односрочную функцию с деструктуризацией

console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}))