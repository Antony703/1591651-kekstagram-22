const isStringLengthCorrect = function (inputString, maxLength) {
  if (inputString.length <= maxLength)
    return true;
  return false;
}

export {isStringLengthCorrect}
