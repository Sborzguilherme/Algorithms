/**
 * A palindromic number reads the same both ways. 
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */
const largestPalindromeProduct = (digits) => {
  
  const palindrome = (n) => {
    return n.toString() === n.toString().split('').reverse().join('')
  } 
  
  let largestDigit = parseInt(new Array(digits).fill(9).join(''))
  let largestPalindrome = 0
  let largestI = 0
  let largestJ = 0
  for(let i = largestDigit; i > 0; i--){
    for(let j = largestDigit; j > 0; j--){
      if(i < largestI && i < largestJ && j < largestI && j < largestJ) return largestPalindrome
      let product = i * j
      if(palindrome(product) && product > largestPalindrome){
        largestPalindrome = product
        largestI = i
        largestJ = j
      }
    }
  }
}

console.log(largestPalindromeProduct(3))