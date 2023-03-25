function find(object, path) {
  let pathArr = path.split('.');
  let obj = object;
  for (let i = 0; i < pathArr.length; i++) {
    obj = obj?.[pathArr[i]];
  }
  return typeof(obj) === 'function' ? undefined : obj;
}

let object = {
  user: {
     name: {
       first: ['John','Maria'],
       last: 'toString',
       toString(){

       }
    }
  }
};
let path = 'user.name.toString';

console.log(find(object, path))