function getRandomNatural(min, max) {
  if (min >= 0 && max >= 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }
  return 0;
}
checkStringLength = function (inputString, maxLength) {
  if (inputString.length <= maxLength)
    return true;
  return false;
}
