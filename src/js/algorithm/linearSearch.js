/**
 * 線形探索: 配列からkeyを探索
 * @param {array} data 探索する配列
 * @param {number} key 探索する値
 */
export default function linearSearch(data, key){
  const _data = data.map(x => x);
  _data.push(key);
  let i;
  let r = Boolean(false);

  for(i = 0;  _data[i] !== key; i++){
  }

  r = i !== _data.length - 1 ? Boolean(true) : Boolean(false);

  return r;
}