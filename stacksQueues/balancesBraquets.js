s1 = '{[()]}'
s2 = '{[(])}'
s3 = '{{[[(())]]}}'

//This implementation passed all test in hackerrank 20/20

function isBalanced(s) {
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
        const removedVal = this.head.data
        this.head = this.head.next
        this.lenght--
        return removedVal
      } else {
        return -1
      }
    }
    getLenght() {
      return this.lenght
    }
  }
  
  const validBraquets = {
    "(": ")",
    "{": "}",
    "[": "]",
  }
  const inputValues = ["{", "[", "("]
  const braquets = s.split('')
  
  const balancedStack = new Stack()
  for (let i = 0; i < braquets.length; i++) {    
    if (inputValues.includes(braquets[i])) {
      balancedStack.push(braquets[i])
    } else {
      const topElement = balancedStack.pop()
      if(validBraquets[topElement] !== braquets[i])
      return 'NO'
    }  
  }

  if(balancedStack.getLenght() !== 0) {
    return 'NO'
  } else {
    return 'YES'
  }
}

console.log(s1)
console.log(isBalanced(s1))
console.log(s2)
console.log(isBalanced(s2))
console.log(s3)
console.log(isBalanced(s3))