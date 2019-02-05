// Import stylesheets
import '../scss/style.scss'

// import bubbleSort from './algorithm/bubbleSort'
// import quickSort from './algorithm/quickSort'
// import linearSearch from './algorithm/linearSearch'
// import binarySearch from './algorithm/binarySearch'
// import Stack from './algorithm/Stack'
// import Queue from './algorithm/Queue'

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>ALGORITHM EDUCATION</h1>`;

// // stack
// const MAX = 5;
// let stack = new Stack(MAX);
// for(let j = 0; j < MAX; i++)
//   stack.push(Math.floor((Math.random()*100)));

// const array = stack.array;

// // bubbleSort
// var sort = bubbleSort(array);
// console.log(`bubbleSort: ${sort}`);

// // quickSort
// var sort = quickSort(array, 0 , array.length - 1);
// console.log(`quickSort: ${sort}`);

// // linearSearch
// var key = 3;
// var active = linearSearch(array, key);
// console.log(`linearSearch array=${array} key=${key} : ${active}`);

// // binarySearch
// var key = 0;
// var sort = quickSort(array, 0, array.length-1);
// var active = binarySearch(sort, key, 0, sort.length-1);
// console.log(`binarySearch array=${sort} key=${key} : ${active}`);


let data = [];

for (let i = 0; i < 10; i++) data.push(Math.floor(Math.random() * 10));

const result = insertSort(data);

console.log(result);

// bubble sort
function bubbleSort(array) {

  const _array = array.slice();

  // bubble sort
  for (let i = _array.length - 1; i > 0; i--) {

    for (let j = 0; j < i; j++) {

      if (_array[j] > _array[j + 1]) {
        const temp = _array[j + 1];
        _array[j + 1] = _array[j];
        _array[j] = temp
      }

    }

  }

  return _array;

}

function selectionSort(array) {

  const _array = array.slice();

  let index = 0;
  for (let i = 0; i < _array.length - 1; i++) {

    let key;
    let value;

    for (let j = index; j <= _array.length - 1; j++) {

      // 値を設定
      if (j === index) {
        value = _array[j];
        key = j;
      }

      // 最小値を探索
      if (value > _array[j]) {
        value = _array[j];
        key = j;
      }

    }

    // 要素の交換
    const temp = _array[index];
    _array[index] = value;
    _array[key] = temp

    // 探索する要素の順番を進める
    index += 1;

  }

  return _array;

}

function insertSort(array){
  const _array = array;

  let index = 0;
  for(let i = 0; i < _array.length; i++){

    for(let j = index; j < _array.length; j++){

      if(index === 0){
        if (_array[index] > _array[index+1]){
          const temp = _array[index+1];
          _array[index+1] = _array[index];
          _array[index] = temp;
        }
      }else{
        for(let c = 0; c <= index; c++){
          if(_array[index] < _array[c]){
            // remove
            const remove = _array.splice(index, 1)[0];

            // insert
            _array.splice(c, 0, remove);
          }
        }
      }

    }
    index += 1;

  }

  return _array;
}