const input1 = `10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2`
const input2 =  `8
1 15
1 17
3
1 25
2
3
2
3`
const input3 = `8
1 12
1 14
3
2
3
1 71
1 63
3`

// This implementation works 100% on hackerRank (17/17)

function processData(input) {
  function Node(data) {
    return {
      data,
      next: null,
    }
  }
  
  function Queue() {
    let head = null
    let tail = null
    let lenght = 0
    
    function enqueue(data) {
      const newNode = Node(data)
      if(!head) {
        head = newNode
        tail = head
      } else {
        tail.next = newNode;
        tail = newNode;
      }
      return ++lenght
    }

    function dequeue() {
      if(head) {
        const temp = head
        head = head.next
        if (head === null) {
          tail = null
        }
        lenght--
        return temp.data
      }
    }

    function getLenght() {
      return lenght
    }

    function getHead() {
      return head ? head.data : null
    }

    function getTail() {
      return tail ? tail.data : null
    }

    return {
      enqueue,
      getLenght,
      getHead,
      getTail,
      dequeue
    }
  }
  const arrInput = input.split(/\n/)
  const lenght = arrInput.lenght
  const queue = Queue()

  for (let i = 1; i < arrInput.length; i++) {
    const element = arrInput[i];
    switch (element[0]) {
      case '1':
        queue.enqueue(element.split(' ')[1])
        break;
    
      case '2':
        queue.dequeue()
        break;

      case '3':
        console.log(queue.getHead())
        break;

      default:
        break;
    }
  }
} 

processData(input1)
processData(input2)
processData(input3)