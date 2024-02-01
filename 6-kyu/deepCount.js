function deepCount(a) {
  return a.reduce((res, item) => (typeof (item) === 'object') ? res + deepCount(item) + 1 : res + 1, 0)
}

console.log(deepCount([1, 2, [3, 4, [5]]]))