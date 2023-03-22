function productArray(numbers) {
  const arrOfMultiples = new Array(numbers.length);
  const multiply = numbers.reduce((multiple, item) => multiple * item, 1)
  arrOfMultiples.fill(multiply);

  console.log(arrOfMultiples)
  return arrOfMultiples.map((item, index) => item / numbers[index])
}

console.log(productArray([12,20]));
console.log(productArray([3,27,4,2]));
console.log(productArray([13,10,5,2,9]));
console.log(productArray([16,17,4,3,5,2]));
