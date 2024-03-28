"use strict"
function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;
  let arr = [];

  if (d === 0) {
    arr.push(-b / (2 * a))
    return arr;
  }
  else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
    return arr;
  }
  else {
    console.log('asdasd');
    return arr;

  }

}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const decimalPercentInMonth = percent/1200;
  const bodyOfCredit = amount - contribution;
  return +(bodyOfCredit * (decimalPercentInMonth+(decimalPercentInMonth / (((1+decimalPercentInMonth)**countMonths)-1)))*countMonths).toFixed(2)

}