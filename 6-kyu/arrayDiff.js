function arrayDiff(a, b) {
  return (b.length === 0) ? a : b.reduce((result, elem) => {
    a = a.filter(item => item !== elem)
    return a;
  },[])
}

console.log(arrayDiff([1,2,3],[1,2]))