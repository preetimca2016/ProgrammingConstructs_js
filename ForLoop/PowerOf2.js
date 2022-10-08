//Powerof2
var prompt = require('prompt-sync')();
const n=prompt('Enter your number  ');
var result = "";
for (let i = 1; i <= n; i++) {
  result += "2 ^ " + i + " = " + Math.pow(2, i) + "\n";
}
console.log(result);