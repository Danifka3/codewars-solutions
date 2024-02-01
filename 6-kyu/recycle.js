function recycle(array) {
// paper = 1, glass = 2, organic = 3, plastic = 4
  return array.reduce((result, {type, material, secondMaterial}) => {
    if (material === 'paper' || secondMaterial === 'paper') result[0].push(type);
    if (material === 'glass' || secondMaterial === 'glass') result[1].push(type);
    if (material === 'organic' || secondMaterial === 'organic') result[2].push(type);
    if (material === 'plastic' || secondMaterial === 'plastic') result[3].push(type);
    return result;
  }, [[],[],[],[]])
}

let a = [
  {type: 'rotten apples', material: 'organic'},
  {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
  {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
  {type: 'amazon box', material: 'paper'},
  {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
];

console.log(recycle(a))