/*
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, 
with the colors in the order red, white and blue.
Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
*/

/**
 * @param {Array} arr 
 * @param {Number} color
 * @returns {Array} Arr with values defined for color parameter 
 */
const findColor = (arr, color) => {
  return arr.filter(item => item === color)
}

/**
 * Sort set of colors
 * @param {Array} arr 
 */
const sortColors = (arr) => {
  const result = []
  while(arr.length) {
    const min = Math.min(...arr)
    result.push(min) 
    arr.splice(arr.indexOf(min),1)
  }
  return result
}

const nums = [1, 0, 1, 2, 2, 1, 1, 2, 2, 0, 0, 0, 0, 2, 1] // Test array
const colors = sortColors([...new Set(nums)]) // Get colors
const result = colors.reduce((acc, color) => [...acc, ...findColor(nums, color)], [])

console.log(`Grouped colors: ${result}`)

