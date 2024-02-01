function find(object, path) {
  let pathArr = path.split('.');
  const res = pathArr.reduce((obj, item, i) => obj?.[pathArr[i]], object)
  return typeof(res) === 'function' ? undefined : res;
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