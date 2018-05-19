export default function numberWithCommas(x) {
  if (!x) {
    return x
  }

  var parts = x.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}
