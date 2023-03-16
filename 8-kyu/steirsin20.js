function stairsIn20(s){
  return s.reduce((ans, item) => ans + item.reduce((sum, num) => sum + num, 0), 0);
}