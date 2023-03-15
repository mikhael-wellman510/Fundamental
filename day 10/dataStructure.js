const list = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null, // add node
        },
      },
    },
  },
};

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    // membuat new node
    let node = new Node(element); // membawa value A , next Null
    // untuk menyimpan node saat ini
    console.log(node);
    let current;

    // jika list kosong tambahkan element dan jadikan head
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      // add node
      current.next = node; //
    }

    this.size += 1;
  }

  printList() {
    let curr = this.head;
    while (curr) {
      console.log(curr.element);
      curr = curr.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.add("A");
linkedList.add("B");

linkedList.printList();
