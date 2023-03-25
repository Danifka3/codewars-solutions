//посмотреть нормальную реализацию

function countIslands(image) {
  let counter = 0;
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[0].length; j++) {
      if (image[i][j] === 1){
        counter += 1;
        image[i][j] = 0;
        makeIslandZero(image,i,j)
      }
    }
  }
  return counter;
}

function makeIslandZero(image,x,y){
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (x+i < image.length && x+i >= 0 && y+j < image[0].length && y+j >= 0){
        if (image[x+i][y+j] === 1){
          image[Math.abs(x+i)][Math.abs(y+j)] = 0;
          makeIslandZero(image,Math.abs(x+i),Math.abs(y+j));
        }
      }
    }
  }
}

const image = [
  [1,0,0,0,1],
  [0,0,0,0,0],
  [0,0,0,0,0],
  [1,0,0,0,1],
];

console.log(countIslands(image));