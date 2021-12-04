const magazine1 = [ 'give', 'me', 'one', 'grand', 'today', 'night' ]
const note1 = [ 'give', 'one', 'grand', 'today' ]

const magazine2 = [ 'two', 'times', 'three', 'is', 'not', 'four' ]
const note2 = [ 'two', 'times', 'two', 'is', 'four' ]

const magazine3 = [ 'ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts' ]
const note3 = [ 'ive', 'got', 'some', 'coconuts' ]

// This implementation works 100% on hackerRank (21/21)

function checkMagazine(magazine, note) {
    
  let mapMagazine = new Map()
  for (let i = 0; i < magazine.length; i++) {
      const counter = mapMagazine.get(magazine[i]) 
      if (counter) {
          mapMagazine.set(magazine[i], counter + 1) 
      } else {
          mapMagazine.set(magazine[i], 1)
      }
  }
      
  for (let i = 0; i < note.length; i++) {
      const counter = mapMagazine.get(note[i])
      if (counter) {
          mapMagazine.set(note[i], counter - 1)
      } else {
          console.log('No')
          return
      }
  }
  
  console.log('Yes') 
}

checkMagazine(magazine1, note1)
checkMagazine(magazine2, note2)
checkMagazine(magazine3, note3)