const runLengthEncoding = (str) => {
  let countSymbol = 1;
  const divided = str.split('');
  return divided.reduce((result, item, i) => {
    if (str[i] === str[i+1]) {
      countSymbol++;
    }else {
      result.push([countSymbol, str[i]]);
      countSymbol = 1;
    }
    return result;
  }, [])
}

console.log(runLengthEncoding("aab"))