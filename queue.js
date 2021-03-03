class Queue {
    constructor() {
        this.queue = [];
    }

    //[1] Thêm 1 phần tử vào vào hàng đợi
    enqueue(item) {
        return this.queue.unshift(item);
    }

    //[2] Lấy 1 phần tử sắp được ra khỏi hàng đợi (FIFO)
    dequeue() {
        return this.queue.pop();
    }

    //[3] Trả về phần tử sẽ được ra sắp tới trong hàng đợi
    peek() {
        return this.queue[this.length - 1];
    }

    //[4] Trả về độ dài của hàng đợi
    get length() {
        return this.queue.length;
    }

    //[5] Trả về true độ dài của hàng đợi == 0
    isEmpty() {
        return this.queue.length === 0;
    }
}


module.exports = Queue;