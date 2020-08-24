'use strict'


1)Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u».
строки - итерируемые. 
*/

//task 1
function countVowelsV2(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  return string.split("").filter((letter) => vowels.includes(letter)).length;
}

//2 task
function fizzbuzzFunction(n){
    for(let i = 0; i < n; i++){
        if(i % 3 === 0 && i % 5 !== 0){
            console.log('fizz ');
        }
        else if(i % 5 === 0 && i % 3 !== 0){
            console.log('buzz ');
        }
        else if(i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz');
        }
        else{
            console.log(i);
        }
    }
}

//3 task
function avg(...args) {
  return args.reduce((sum, value) => sum + value) / args.length;
}


//task4
function makeCounter() {
  let counterState = 0;

  return function counterAdd() {
    return ++counterState;
  };
}


//5 task
function operation(num1, num2, fn) {
  return fn(num1, num2);
}

//6 task
const obj = {
  method1() {
    return this;
  },
  method2() {
    return this;
  },
  method3() {
    return "method 3";
  },
};

obj.method1().method2().method3();

