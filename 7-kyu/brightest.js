function brightest(colors) {
  return colors.reduce((bright, color) => (findV(bright.slice(1).toUpperCase()) < findV(color.slice(1).toUpperCase()) ? color : bright))
}

function findV(str) {
  return Math.max(parseInt(str.slice(0,2), 16), parseInt(str.slice(2,4), 16), parseInt(str.slice(4,6), 16));
}

console.log(brightest(["#001000", "#000000"]));