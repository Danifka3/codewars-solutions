function numberOfPairs(gloves) {
  const pairs = new Map();
  gloves.forEach((item, i) => {
    if (pairs.has(item)) {
      pairs.set(item, pairs.get(item) + 1)
    } else {
      pairs.set(item, 1);
    }
  })
  let sum = 0;
  pairs.forEach(value => {
    sum += Math.floor(value/2);
  });
  return sum;
}

// let tests = [
//   [['red','red'],1],
//   [['red','green','blue'],0],
//   [['gray','black','purple','purple','gray','black']]
console.log(numberOfPairs(['gray','black','purple','purple','gray','black']));