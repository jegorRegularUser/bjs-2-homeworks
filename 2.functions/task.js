function getArrayParams(...arr) {
  const max = arr[0];
  const min = arr[1];
  const avg = +(arr.reduce((acc, el)=> acc+el)/arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
