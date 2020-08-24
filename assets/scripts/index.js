'use strict'

function logParenthis(level) {
    let parenthisArray = [];
    logPar(level);
  
    function logPar(number) {
      if (number > 0) {
        parenthisArray = [...parenthisArray, "("];
  
        logPar(number - 1);
  
        parenthisArray = [...parenthisArray, ")"];
      }
    }
  
    return parenthisArray.join("");
  }

 logParenthis(5);
