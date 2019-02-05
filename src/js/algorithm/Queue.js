/**
 * Queue: データ構造 First In First Out
 * @param {number} size 配列の大きさ
 */
export default class Queue {
  
  constructor(size){
    this.queue = new Array(size);
    this.tail = 0;
  }

  get array() {
    return this.queue;
  }

  enqueue(data){

    // queue overflow
    if(this.tail > this.queue.length - 1){
      alert('Queue Overflow');
      return;
    }

    this.queue[this.tail] = data;
    this.tail++;
  }

  dequeue() {

    if(this.tail - 1 < 0) {
      alert('Queue Underflow');
      return;
    }

    const v = this.queue[0];
    for(let i = 1; i < this.tail; i++){
      this.queue[i-1] = this.queue[i];
    }
    this.tail--;
    return v;
  }
}