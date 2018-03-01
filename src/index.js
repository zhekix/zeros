module.exports = function getZerosCount(number) {
  var count = 0;
  for (var i=5; number/i>=1; i *= 5)
    count += Math.floor(number/i);
  return count;
}
