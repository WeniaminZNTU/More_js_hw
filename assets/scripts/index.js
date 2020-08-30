'use strict'

//Task 1
function ArrayMethods() {
  this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
      return this.length;
    }
  };

  this.pop = function () {
    const lastIndex = this.length - 1;
    const lastItem = this[lastIndex];
    delete this[lastIndex];
    --this.length;
    return lastItem;
  };

  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };

  this.concat = function (array) {
    let result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }
    for (let i = 0; i < array.length; i++) {
      result.push(array[i]);
    }
    return result;
  };

  this.flat = function (depth = 1) {
    if (depth < 0) {
      console.error("depth must be a positive value");
      return;
    }

    let newArr = new MyArray();
    if (depth === 0) {
      return this;
    }

    for (let i = 0; i < this.length; i++) {
      if (Array.isArray(this[i])) {

          const buffer = this[i].flat(depth - 1);
          newArr = newArr.concat(buffer);

      } else if (this[i] !== undefined) {
        newArr.push(this[i]);
      }
    }
    return newArr;
  };
}

function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
    this.length++;
  }
}

MyArray.prototype = new ArrayMethods();

let myArr = new MyArray("test", 2, undefined, undefined, undefined, undefined, undefined, [[[3]]], "test5", [[[[[5]]]]]);

console.log(myArr);
myArr = myArr.flat();
console.log(myArr);
myArr = myArr.flat(4);
console.log(myArr);



//Task 3
function logParenthis(level) {
  let parenthisArray = [];
  logPar(level);

  function logPar(number) {
    if (number > 0) {
      parenthisArray = [...parenthisArray, "("];

      logPar(number - 1);

      parenthisArray = [...parenthisArray, ")"];
    }

    return parenthisArray.join("");
}
}

logParenthis(5);


//Task 4
const user = {
  name: 'Test',
  DateOfBirth: new Date(2000, 1, 6),
  hoursWorked: 34,
  ratePerHour: 10,

  get salory(){
      return this.ratePerHour * this.hoursWorked;
  },

  get age(){
      let currentDate = new Date();

      let correctYear = currentDate.getUTCFullYear();
      let correctMonth = currentDate.getUTCMonth();
      let correctDay = currentDate.getUTCDay();

      let userBirthYear = this.DateOfBirth.getFullYear();
      let userBirthMonth = this.DateOfBirth.getUTCMonth();
      let userBirthDay = this.DateOfBirth.getUTCDay();


      if(userBirthMonth < correctMonth){
          return correctYear - (userBirthYear);
      }

      if(userBirthMonth > correctMonth){
          return correctYear - (++userBirthYear);
      }

      if(userBirthMonth === correctMonth){
          if(userBirthDay <= correctDay){
              return correctYear - (userBirthYear);
          }
          else if(userBirthDay > correctDay){
              return correctYear - (++userBirthYear);
          }
      }
  }
}
console.log('user salary:', user.salory);
console.log('user age:', user.age);




//Additional tasks
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

