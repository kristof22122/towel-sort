
// You should implement your task here.

function compareNumeric1(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
function compareNumeric2(a, b) {
  if (a < b) return 1;
  if (a == b) return 0;
  if (a > b) return -1;
}

module.exports = function towelSort (matrix = []) {
  if (matrix.length == 0){
    return []
  }
  let ind = 0
  let answer = []
  for(let i of matrix){
    if (ind % 2 == 0){
      i = i.sort(compareNumeric1)
      for (let j of i){
      answer.push(j)
      }
      ind += 1
    }else {
      i = i.sort(compareNumeric2)
      for (let j of i){
        answer.push(j)
      }
      ind += 1
    }
  }
  return answer;
}
