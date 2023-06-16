function getArrayParams(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let avg = (arr.reduce((total, arr) => total + arr, 0))/arr.length;
  avg = Number(avg.toFixed(2));
  return {max: max, min: min, avg: avg}
};

function summElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  };
  let sum = arr.reduce((total, arr) => total + arr, 0);
  return sum;
};

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  };
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let difference = max - min;
  return difference;
};

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  };
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]; 
    } else {
      sumOddElement += arr[i];
    }
  }
  let result = sumEvenElement - sumOddElement;
  return result;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  };
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    };
  };
  let result = sumEvenElement/countEvenElement;
  return result;
};

function makeWork (arrOfArr, func) {
   let maxWorkerResult = 0;
   let funcResult = 0;
   for (let i = 0; i < arrOfArr.length; i++) {
    funcResult = func(...arrOfArr[i]);
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
     };
   };
   return maxWorkerResult;
};

