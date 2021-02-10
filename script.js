"use strict";
const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 34, 89, 900, 2];
let countArr = [];
let i = 0;
function countMe() {
  for (i = 0; i < 9; i++) {
    task(i);
  }

  function task(i) {
    setTimeout(function () {
      countArr.unshift(numberArr[i]);
      console.log(countArr);
    }, i * 1000);
  }
}

countMe();
