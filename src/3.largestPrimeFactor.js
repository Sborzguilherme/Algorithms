/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

const largestPrimeFactor = (number) => {
  
  const prime  = (n) => {
    if(n <= 2) return true
    for(let i=2; i <= Math.ceil(Math.sqrt(n)); i++){
      if(n % i === 0) return false
    }
    return true
  }
  const testValue = Math.ceil(Math.sqrt(number))
  const startValue =  testValue % 2 === 0 ? testValue + 1 : testValue

  for(let i = startValue; i >= 3; i-=2){
    if(number % i === 0) {
      if(prime(i)) return i
    }
  }
}

console.log(largestPrimeFactor(600851475143))

 