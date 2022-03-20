export function isNumber(obj) {
  return typeof obj === 'number' && !isNaN(obj)
}
// to价格
export function toDecimal(x) {
  const l = parseFloat(x)
  if (isNaN(l)) {
    return false
  }
  const f = Math.round(x * 100) / 100
  let s = f.toString()
  let rs = s.indexOf('.')
  if (rs < 0) {
    rs = s.length
    s += '.'
  }
  while (s.length <= rs + 2) {
    s += '0'
  }
  return s
}
