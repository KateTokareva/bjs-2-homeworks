"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x;
  let d = b**2-4*a*c;
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    x = -b/2*a;
    arr.push(x);
    return arr;
  } else if (d > 0) {
    x = (-b + Math.sqrt(d) )/(2*a);
    arr.push(x);
    x = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x);
  };

  return arr;
};

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = (percent/100)/12;
  let sum = amount - contribution;
  let payment = sum * (percent + (percent / (((1 + percent)**countMonths) - 1)));
  let result = payment*countMonths;
  return Number(result.toFixed(2));
};
