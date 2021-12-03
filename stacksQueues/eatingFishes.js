arrayA = [4,3,2,1,5]
arrayB = [0,1,0,0,0]

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor() {
    this.head = null
    this.lenght = 0
  }
  push(data) {
    const node = new Node(data)
    node.next = this.head
    this.head = node
    return ++this.lenght
  }
  pop() {
    if(this.head) {
      this.head = this.head.next
      return --this.lenght
    } else {
      return -1
    }
  }
  peek() {
    return this.head ? this.head.data : null
  }
  getLength() {
    return this.lenght
  }
}

// Implementation passed with 100% on Score, Correctness and Performance on Codelity

function remainFishes(A, B) {
  const upStream = new Stack()
  const downStream = new Stack()

  for (let i = 0; i < A.length; i++) {
    let newFish = A[i]
    if (B[i] === 1) {
      downStream.push(newFish)
    } else {
      while (true) {
        let lastDown = downStream.peek()
        if (lastDown === null) {
          upStream.push(newFish)
          break
        } else {
          if (lastDown >= newFish) {
            break
          } else {
            downStream.pop()
          }
        }
      }
    }
  }

  return (upStream.getLength() + downStream.getLength())
}

console.log(remainFishes(arrayA, arrayB))