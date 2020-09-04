/*
Given a string, find the length of the longest substring without repeating characters.
*/

const strTest = 'abrkaabcdefghijjxxx'

const findLargestSequenceLenght = (str) => {
  const arr = str.split('')
  let cont = max = 1
  for (let i = 0; i < arr.length-1; i++){
    if(arr[i] === arr[i+1]) {
      if(cont > max){
        max = cont
      }
      cont = 1
    } else cont+=1
  }
  return max
}

const result = findLargestSequenceLenght(strTest')
console.log(`The largest sequence of different characters have lenght ${result}`)