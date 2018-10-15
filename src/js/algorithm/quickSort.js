/**
 * クイックソート: 配列をソートする
 * @param {array} array ソートする配列
 * @param {number} left 配列左端のindex
 * @param {number} right 配列右端のindex
 */
export default function quickSort(array, left, right){

  let _array = array.slice();

  if(left >= right) {
    return _array;
  }

  // 中央の配列要素指定
  let p = _array[((left + right) / 2).toFixed()];
  let _left = left;
  let _right = right;
  let temp;

  while(_left <= _right) {
    while(_array[_left] < p){ _left++; }
    while(_array[_right] > p){ _right--; }
    if( _left <= _right){
      temp = _array[_left];
      _array[_left] = _array[_right];
      _array[_right] = temp;
      _left++;
      _right--;
    }
  }

  _array = quickSort(_array, left, _right);
  _array = quickSort(_array, _left, right);

  return _array;
}