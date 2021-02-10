"use strict";
const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let countArr = [];
let i = 0;
function countMe() {
  for (i = 0; i < 9; i++) {
    // console.log(numberArr[i]);
    // console.log(countArr);
  }
  setInterval(() => {
    console.log(countArr.push(numberArr[i]));
  }, 1000);
}
countMe();
