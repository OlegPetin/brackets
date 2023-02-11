module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = [];
  const CLOSE_BRACKETS = [];
  const BRACKETS_PAIR = {};
  let k = bracketsConfig.length;
  bracketsConfig.forEach(element => {
    OPEN_BRACKETS.push(element[0]);
    CLOSE_BRACKETS.push(element[1]);
    for (let i = 0; i <= k; i++) {
      BRACKETS_PAIR[element[1]] = element[0];
    }
  });
console.log(OPEN_BRACKETS);
console.log(CLOSE_BRACKETS);
console.log(BRACKETS_PAIR);
const stack = [];
   for(let i=0;i<str.length;i++){
     let currentSymbol = str[i];
      if (OPEN_BRACKETS.includes(currentSymbol)) {
        if(CLOSE_BRACKETS.includes(currentSymbol) && stack[stack.length - 1] === currentSymbol){
          stack.pop();
        }else{
          stack.push(currentSymbol);
        }     
     } 
     else {
      if (stack.length === 0) {
        return false;
      } else {
        if (BRACKETS_PAIR[currentSymbol] === stack[stack.length - 1]) {
          stack.pop();
        } else {
         return false;
        }
            }
          }
}
console.log(stack)
return stack.length === 0;
}