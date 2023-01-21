module.exports = function reverse(n) {
  let math = Math.abs(n)
  let str = math.toString()
  let rez = str.split('').reverse().join('')
  return +rez
}
