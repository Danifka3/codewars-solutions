function head(arr) {
  if(arr.length !== 0){
    return arr[0];
  }
  return [];
}

function tail(arr) {
  if(arr.length > 1){
    return arr.reduce((arr1, item, index) => {
      if (index !== 0) arr1.push(arr[index]);
      return arr1;
    }, []);
  }
  return [];
}

function init(arr) {
  if(arr.length !== 0){
    if(arr.length === 1) {
      return arr[0];
    }
    return arr.reduce((arr1, item, index) => {
      if (index !== arr.length - 1) arr1.push(arr[index]);
      return arr1;
      }, []);
  }
  return [];
}

function last(arr) {
  if(arr.length > 1){
    return arr[arr.length - 1];
  }
  return [];
}

console.log(init([40, 50, 20, 10]));