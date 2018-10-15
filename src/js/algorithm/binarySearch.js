/**
 * 二分探索: 配列からkeyを探索
 * 前提として配列はsortされている必要がある。
 * @param {array} data 探索する配列
 * @param {number} key 探索する値
 * @param {number} left 配列左端のindex
 * @param {number} right 配列右端のindex
 */
export default function binarySearch(data, key, left, right) {
  const _data = data.map(x => x);
  const _key = key;
  const _left = left;
  const _right = right;

  // keyが見つからなかった
  if(_left > _right){
    return Boolean(false);
  }

  // keyが見つかった
  const mid = parseInt((_left + _right) / 2);
  if(_data[mid] === key){
    return Boolean(true);
  }


  if(_data[mid] > key){
    // 中央より左側を探索
    return binarySearch(_data, _key, _left, mid-1);
  }else{
    // 中央より右側を探索
    return binarySearch(_data, _key,
    mid+1, right);
  }
}