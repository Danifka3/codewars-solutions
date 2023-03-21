function myLanguages(results) {
  const res = [];
  results = new Map(Object.entries(results));
  for (let lang of res.keys()) {
    if  (res.get(lang) >= 60) {
      res.push(lang);
    }
  }
  return res;
}

console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}))