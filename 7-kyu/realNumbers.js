function realNumbers(n){
  let ans = 1;
  for (let i = 4; i < n; i++)
    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0)
      ans++;
  return ans;
}

console.log(realNumbers(10))