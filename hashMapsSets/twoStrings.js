const words = ['hello', 'world', 'hi', 'world']

// This implementation works 100% on hackerRank (7/7)

function twoStrings(s1, s2) {
  const stringSet = new Set(s1.split(''))
  
  for (let i = 0; i < s2.length; i++) {
      if (stringSet.has(s2[i])) {
          return 'YES'
      }
  }

  return 'NO'
}

twoStrings(words[0], words[1])
twoStrings(words[2], words[3])