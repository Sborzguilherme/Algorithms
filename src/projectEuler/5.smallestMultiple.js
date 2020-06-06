/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

const smallestMultiple = (range) => {
  let value = 2
  let stop
  while(true){
    stop = true
    for(let i=2; i <= range; i++){
      if(value % i !== 0) {
        stop = false
        break
      }
    }
    if(stop) return value
    value+=2
  }
} 

console.log(smallestMultiple(20))