function getArrayParams(...arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const avg = +(arr.reduce((acc, el) => acc + el) / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  return arr.length != 0 ? arr.reduce((acc, el) => acc + el, 0) : 0;
}

function differenceMaxMinWorker(...arr) {
  return arr.length != 0 ? Math.max(...arr) - Math.min(...arr) : 0;

}

function differenceEvenOddWorker(...arr) {
  return arr.length != 0 ? arr.reduce((acc, el) => el % 2 == 0 ? acc + el : acc + 0, 0) - arr.reduce((acc, el) => el % 2 != 0 ? acc + el : acc + 0, 0) : 0;
}

function averageEvenElementsWorker(...arr) {
  return arr.length != 0 ? arr.reduce((acc, el) => el % 2 == 0 ? acc + el : acc + 0, 0) / arr.reduce((acc, el) => el % 2 == 0 ? acc + 1 : acc + 0, 0) : 0;
}

function makeWork(arrOfArr, func) {
  const arrWithResults =[];
  for (i=0;i<arrOfArr.length; i++){ 
    arrWithResults.push(func(...arrOfArr[i]))
  };
  return Math.max(...arrWithResults);
}
