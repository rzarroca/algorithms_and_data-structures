h1 = [8,8,5,7,9,8,7,4,8]

function Node(data) {
  return {
    data,
    next: null,
  }
}
function Stack() {
  let head = null
  let length = 0

  function push(data) {
    const newNode = Node(data)
    newNode.next = head
    head = newNode
    return ++length
  }
  function pop() {
    if (head) {
      const value = head.data
      head = head.next
      length--
      return value
    }
  }
  function getLength() {
    return length
  }
  function peek() {
    return head ? head.data : null
  }

  return {
    push,
    pop,
    getLength,
    peek,
  }
}

// Implementation passed with 100% on Score, Correctness and Performance on Codelity

function stoneWall(H) {
  const wallStack = Stack()
  let counter = 0

  wallStack.push(H[0])
  for (let index = 1; index < H.length; index++) {
    const element = H[index]
    let topStack = wallStack.peek()
    
    if (element > topStack) {
      wallStack.push(element)
    } else if (element === topStack) {
      // if you would need to count distances you should replace the topNode with the newOne (while all your nodes keep record of its position)
    } else {
      while (element < topStack) {
        wallStack.pop()
        topStack = wallStack.peek()
        counter++
      }
      if (element > topStack) {
        wallStack.push(element)
      }
    }
  }
  return (counter + wallStack.getLength())
}

console.log(stoneWall(h1))