//решить

function realNumbers(n) {
  return Math.round(n*(1 - 0.5 - 1/6 - 0.1))
}
console.log(realNumbers(5))
console.log(realNumbers(10))
console.log(realNumbers(20))
console.log(realNumbers(30))
console.log(realNumbers(40))
console.log(realNumbers(55))
console.log(realNumbers(66))
console.log(realNumbers(75))
console.log(realNumbers(100))

// 5, 1],
// [10, 2],
//     [20, 6],
//     [30, 8],
//     [40, 10],
//     [55, 15],
//     [66, 17],
//     [75, 20],
//     [100, 26