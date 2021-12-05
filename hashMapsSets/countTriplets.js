const arr1 = [1, 2, 2, 4]
const ratio1 = 2

const arr2 = [1, 3, 9, 9, 27, 81]
const ratio2 = 3

// solution if array would be orderer (doesnt work in this particular exercise)

function countTripletsOrdered(arr, r) {

  const countedNumbers = new Map()

  arr.forEach(number => {
    let counter = countedNumbers.has(number)
    if (counter) {
      countedNumbers.set(number, counter + 1)
    } else {
      countedNumbers.set(number, 1)
    }
  })

  let triplets = 0

  for (const [key, value] of countedNumbers) {
    console.log({key, value})
    if (countedNumbers.has(key*(r)) && countedNumbers.has(key*(r*r))) {
      triplets += value * countedNumbers.get(key*(r)) * countedNumbers.get(key*(r*r))
    }
  }

  return triplets

}

countTripletsOrdered(arr1, ratio1)
countTripletsOrdered(arr2, ratio2)

// This implementation works 66% on hackerRank (8/12)

function countTriplets(arr, r) {

  const countedNumbers = new Map()

  arr.forEach((number, index) => {
    let positions = countedNumbers.get(number)
    if (positions) {
      positions.push(index)
      countedNumbers.set(number, positions)
    } else {
      countedNumbers.set(number, [index])
    }
  })

  let triplets = 0

  for (const [key, indexes] of countedNumbers) {
    if (countedNumbers.has(key*(r)) && countedNumbers.has(key*(r*r))) {
      const doublesIndexes = countedNumbers.get(key*(r))
      const triplesIndexes = countedNumbers.get(key*(r*r))


      //improve here maping indexes indexes already seen
      for (let i = 0; i < indexes.length; i++) {
        const filteredDoubles = doublesIndexes.filter(value => value > indexes[i])
  
        for (let j = 0; j < filteredDoubles.length; j++) {
          const filteredTriples = triplesIndexes.filter(value => value > filteredDoubles[j]);
          triplets += filteredTriples.length
        }
      }
    }
  }

  return triplets

}

countTriplets(arr1, ratio1)
countTriplets(arr2, ratio2)