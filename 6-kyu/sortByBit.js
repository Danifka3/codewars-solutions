function sortByBit(arr) {
  arr.sort(compareBitsCount)
  return arr;
}

function compareBitsCount(a, b) {
  let aBitsCount = Array.from(a.toString(2)).reduce((count, item) => (item === '1') ? ++count : count, 0);
  let bBitsCount = Array.from(b.toString(2)).reduce((count, item) => (item === '1') ? ++count : count, 0);
  if (aBitsCount > bBitsCount) return 1;
  if (aBitsCount == bBitsCount) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  if (aBitsCount < bBitsCount) return -1;
}

let a = [3, 8, 3, 6, 5, 7, 9, 1];
console.log(sortByBit(a));