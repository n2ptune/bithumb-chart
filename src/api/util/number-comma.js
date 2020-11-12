/**
 * Format number with comma
 * @param {number} num
 * @param {string} after
 */
function fomratNumberWithComma(num, after = '') {
  let numStr = num.toString()

  if (numStr.length < 4) return numStr

  const numArr = numStr.split('')

  if (numArr.findIndex((str) => str === ',' || str === ' ') !== -1) {
    throw new Error('Function can format only number')
  }

  let i = numArr.length - 3

  while (i > 0) {
    numArr.splice(i, 0, ',')
    i -= 3
  }

  return numArr.join('') + after
}

export default fomratNumberWithComma
