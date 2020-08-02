/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
 */
const isPrime  = (n) => {
  if(n < 2) return false
  if(n === 2) return true
  for(let i=2; i <= Math.ceil(Math.sqrt(n)); i++){
    if(n % i === 0) return false
  }
  return true
}

const nPrime = (primePosition) => {
  let cont = 0
  let testNumber = 1
  while(cont < primePosition){
    testNumber++
    if(isPrime(testNumber)){
      cont++
    }
  }
  return testNumber
}
const primePosition = 10001
console.log(`The ${primePosition}th prime number is ${nPrime(primePosition)}`)