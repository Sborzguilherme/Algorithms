/**
 * The sum of the squares of the first ten natural numbers is,
 * 1**2 + 2**2 + ...+ 10**2 = 385
 * The square of the sum of the first ten natural numbers is,
 * (1+2+...+10)**2 = 55*2 = 3025
 * Hence the difference between the sum of the squares of the first ten natural numbers 
 * and the square of the sum is 3025−385=2640.
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */
const sumSquareDiff = (range) => {
  const arrNum = [...Array(range+1).keys()]
  const sumOfSquares = arrNum.reduce((acc, val) => acc + (val ** 2)) 
  const squareOfSums = arrNum.reduce((acc, val) => acc + val) ** 2
  return squareOfSums - sumOfSquares
}

console.log(sumSquareDiff(100))
