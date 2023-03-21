function head(arr) {
  if(arr.length > 0){
    return arr[0];
  }
  else {
    return [];
  }
}

function tail(arr) {
  if(arr.length > 1){
    const arr1 = [];
    arr.forEach((item, index) => {
      if (index !== 0){
        arr1.push(arr[index]);
      }
    })
    return arr1;
  }
  else {
    return [];
  }
}

function init(arr) {
  if(arr.length > 0){
    const arr1 = [];
    if(arr.length === 1) {
      return arr[0];
    }else {
      arr.forEach((item, index) => {
        if (index !== arr.length - 1) {
          arr1.push(arr[index]);
        }
      });
      return arr1;
    }
  }
  else {
    return [];
  }
}

function last(arr) {
  if(arr.length > 1){
    return arr[arr.length - 1];
  }
  else {
    return [];
  }
}

console.log(init([40]));