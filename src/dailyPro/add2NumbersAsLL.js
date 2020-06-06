/**
 * Add two numbers as a Linked List
 * Description: The input is two linked lists, each one representing a number.
 * Each node corresponds to a digit of that number.
 * The number is reversed. The goal is to get the sum of the results and returned it as a Linked List
 */
const { LinkedList } = require('./linkedList')

const getNumber = (list) => {
  let sum = 0
  let mult = 1
  while(!list.empty()){
    sum += list.shift() * mult
    mult *= 10
  }
  return sum
}

const inputA = new LinkedList()
const inputB = new LinkedList()

// Input A = 342
inputA.push(2).push(4).push(3)

// Input B = 465
inputB.push(5).push(6).push(4)

const sum = getNumber(inputA) + getNumber(inputB)
const digitsResult = sum.toString().split('')

const result = new LinkedList()
digitsResult.forEach(item => {
  result.unshift(parseInt(item))
})

result.print()



