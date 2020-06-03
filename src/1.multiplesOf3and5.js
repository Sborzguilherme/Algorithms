/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
const sumMultiples3and5  = (maxValue) => {
  const arrNum = [...Array(maxValue).keys()]

  return arrNum.reduce((acc, val) => {
    if( (val % 3 === 0) || (val % 5 === 0)) return acc += val
    return acc
  })
}

console.log(sumMultiples3and5(1000))