class Queue {
  #container = [];
  enqueue(element) {
    // memasukan data index terakhir
    this.#container.push(element); // push ke Container 1,2,3
  }

  dequeue() {
    // menghapus nilai pertama di dalam wadah
    return this.#container.shift();
  }

  getElements() {
    // untuk mendapatkan semua element yang ada di kontainer
    return this.#container;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.getElements());

queue.dequeue(); // menjalankan metode deque untuk mengahpus angka pertama /  remove first item

console.log(queue.getElements());
