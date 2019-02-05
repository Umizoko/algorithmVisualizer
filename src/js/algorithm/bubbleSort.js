/**
 * バブルソート: 配列をソートする
 * @param {array} array ソートする配列
 */
export default function bubbleSort(array) {

  const _array = array.map(x => x);
  
  for(let i = _array.length - 1; i > 0; i--){
    for(let j = 0; j < i; j++){
      
      // 隣を比較
      if(_array[j] > _array[j+1]){
        const temp = _array[j+1];
        _array[j+1] = _array[j];
        _array[j] = temp;
      }
    }
  }

  return _array.map(x => x);
};