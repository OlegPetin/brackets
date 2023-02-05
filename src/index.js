module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = [];
  const BRACKETS_PAIR = {};
  let k = bracketsConfig.length;
  bracketsConfig.forEach(element => {
    OPEN_BRACKETS.push(element[0]);
    for (let i = 0; i <= k; i++) {
      BRACKETS_PAIR[element[0]] = element[1];
    }
  });
// console.log(OPEN_BRACKETS);
// console.log(str.length);
  let stack = [];
   for(let i=0;i<str.length;i++){
     let currentSymbol = str[i];
   // console.log(currentSymbol);
   //  console.log(BRACKETS_PAIR[currentSymbol]);
      if (OPEN_BRACKETS.includes(currentSymbol)) {
       stack.push(currentSymbol);
     } 
    //  else {
    //    if (stack.length === 0) {
    //      return false;
    //    }
      // console.log(stack);
      //console.log(currentSymbol);
      let topElement = stack[stack.length - 1];
       // console.log(BRACKETS_PAIR[currentSymbol]);
        if (BRACKETS_PAIR[currentSymbol] === topElement) {
         stack.pop();
         //console.log(stack);
       }
      // console.log(stack);
 //  }
}
//console.log(stack);
  // // your solution
}
