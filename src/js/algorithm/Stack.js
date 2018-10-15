/**
 * Stack: データ構造 Last In First Out
 * @param {number} size 配列の大きさ
 */
export default class Stack {
  constructor(size){
    this.stack = new Array(size);
    this.top = 0;
  }

  get array() {
    return this.stack;
  }

  push(data){

    // stack overflow
    if(this.top > this.stack.length - 1){
      alert('Stack Overflow');
      return;
    }

    this.stack[this.top] = data;
    this.top++;
  }

  pop(){

    // underflow
    if(this.top - 1 < 0){
      alert('Stack Underflow');
      return;
    }

    this.top--;
    const ans = this.stack[this.top];
    // 配列の最後の要素を除く
    this.stack = this.stack.slice(0, this.top);
    return ans;
  }


}