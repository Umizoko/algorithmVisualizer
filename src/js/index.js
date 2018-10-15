// Import stylesheets
import '../scss/style.scss'

import bubbleSort from './algorithm/bubbleSort'
import quickSort from './algorithm/quickSort'
import linearSearch from './algorithm/linearSearch'
import binarySearch from './algorithm/binarySearch'
import Stack from './algorithm/Stack'
import Queue from './algorithm/Queue'

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>ALGORITHM EDUCATION</h1>`;

// stack
const MAX = 5;
let stack = new Stack(MAX);
for(let i = 0; i < MAX; i++)
  stack.push(Math.floor((Math.random()*100)));

const array = stack.array;

// bubbleSort
var sort = bubbleSort(array);
console.log(`bubbleSort: ${sort}`);

// quickSort
var sort = quickSort(array, 0 , array.length - 1);
console.log(`quickSort: ${sort}`);

// linearSearch
var key = 3;
var active = linearSearch(array, key);
console.log(`linearSearch array=${array} key=${key} : ${active}`);

// binarySearch
var key = 0;
var sort = quickSort(array, 0, array.length-1);
var active = binarySearch(sort, key, 0, sort.length-1);
console.log(`binarySearch array=${sort} key=${key} : ${active}`);

