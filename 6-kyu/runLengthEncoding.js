const runLengthEncoding = (str) => {
  let countSymbol = 1;
  const result = [];
  for (let i = 0; i < str.length; i++){
    if (str[i] === str[i+1]) {
      countSymbol++;
    }else {
      result.push([countSymbol, str[i]]);
      countSymbol = 1;
    }
  }
    return result // << fix this
}

console.log(runLengthEncoding("aab"))