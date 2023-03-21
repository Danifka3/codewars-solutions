function brightest(colors){
  let max = '#000000';
  colors.forEach(item => {
    if (findV(max.slice(1).toUpperCase()) < findV(item.slice(1).toUpperCase())) {
      max = item;
    }
  });
  return max;
}

function findV(str) {
  return Math.max(parseInt(str.slice(0,2), 16), parseInt(str.slice(2,4), 16), parseInt(str.slice(4,6), 16));
}

console.log(brightest(["#001000", "#000000"]));