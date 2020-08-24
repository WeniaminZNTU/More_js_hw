'use strict'

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
