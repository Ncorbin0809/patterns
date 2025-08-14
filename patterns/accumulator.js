/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== 'number') return NaN

  let sum = 0
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  let product = 1
  if (typeof n !== 'number') {
    return NaN
  } else if (n < 0) {
    return undefined
  } else if (n === 0) {
    return 1
  } else {
    for (let i = 1; i <= n; i++) {
      product *= i
    }
  }
  return product
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  let arr = []
  if (typeof n !== 'number') {
    return null
  }
  if (n === 0 || n <= 0) {
    return []
  }
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  return arr
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  let longest = ''
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longest.length) {
      longest = strings[i]
    }
  }
  return longest
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  let studentsPresent = 0
  for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === true) {
      studentsPresent += 1
    }
  }
  return studentsPresent
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */

export function complementDNA(dna) {
  if (typeof dna !== 'string') return null

  const complements = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }

  let result = ''

  for (let i = 0; i < dna.length; i++) {
    const nucleoBase = dna[i]
    result += complements[nucleoBase]
  }
  return result
}
