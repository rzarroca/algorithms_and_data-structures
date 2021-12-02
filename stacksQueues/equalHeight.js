a1 = [3, 2, 1, 1, 1]
a2 = [4, 3, 2]
a3 = [1, 1, 4, 1]

// This implementation is good (same logic as 100% passed test) but has some bug that makes some test cases fail
// test passed 5/27 aprox


function equalStacks(h1, h2, h3) {
  //create factory functions and stacks
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
      
      length += newNode.data
      return length
    }
    function pop() {
      if (head) {
        const value = head.data
        head = head.next
        length -= value
        return length
      }
    }
    function getLength() {
      return length
    }

    return {
      push,
      pop,
      getLength,
    }
  }
  
  const stack1 = Stack()
  const stack2 = Stack()
  const stack3 = Stack()
  
  //fill stacks
  function fillStack(stack, array) {
    for (let i = 0; i < array.length; i++) {
      stack.push(array[array.length - 1 - i])
    }
  }

  fillStack(stack1, h1)
  fillStack(stack2, h2)
  fillStack(stack3, h3)

  //initialize heigths and maxValue
  let heigth1 = stack1.getLength()
  let heigth2 = stack2.getLength()
  let heigth3 = stack3.getLength()
  let maxValue = Math.max(heigth1, heigth2, heigth3)

  //deleting values from the highest stack
  while (heigth1 !== heigth2 && heigth1 !== heigth3) {
    if (heigth1 === 0 || heigth2 === 0 || heigth3 === 0) {
      break
    }
    console.log('entering while')
    if (heigth1 > heigth2 && heigth1 > heigth3) {
      console.log('height1')
      heigth1 = stack1.pop()
      maxValue = heigth1
    } else if (heigth1 < heigth2 && heigth2 > heigth3) {
      console.log('height2')
      heigth2 = stack2.pop()
      maxValue = heigth2
    } else {
      console.log('height3')
      heigth3 = stack3.pop()
      maxValue = heigth3
    }
    console.log({heigth1, heigth2, heigth3, maxValue})
  }

  return maxValue
}

equalStacks(a1, a2, a3)