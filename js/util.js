const isStringLengthCorrect = function (inputString, maxLength) {
  if (inputString.length <= maxLength)
    return true;
  return false;
}

const getRandomNatural = function (min, max) {
  if (max >= 0 && max > min) {
    if (min < 0) {
      min = 0;
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }
  return 0;
}

export {isStringLengthCorrect, getRandomNatural};
