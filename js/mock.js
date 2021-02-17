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
const isStringLengthCorrect = function (inputString, maxLength) {
  if (inputString.length <= maxLength)
    return true;
  return false;
}
const createComments = (number_of_comments) => {
  let comments = [];
  for (let i = 0; i < number_of_comments; i++) {
    comments.push({
      id: getRandomNatural(1, 3000),
      avatar: 'img/avatar' + getRandomNatural(1, 7) + '.svg',
      message: COMMENT_MESSAGES[getRandomNatural(0, COMMENT_MESSAGES.length)],
      name: AUTHOR_NAMES[getRandomNatural(0, AUTHOR_NAMES.length)]
    })
  }
  return comments;
}
const createPhotoDescription = (index) => {
  return {
    id: index,
    url: 'photos/' + getRandomNatural(1, 26) + '.jpg',
    description: PHOTO_DESCRIPTIONS[getRandomNatural(1, PHOTO_DESCRIPTIONS.length)],
    likes: getRandomNatural(15, 201),
    comments: createComments(getRandomNatural(1, 10))
  }
}
isStringLengthCorrect('test', 4);
getRandomNatural(5, 20);
console.log(createPhotoDescription());
let photoDescriptions = [];
for (let i = 0; i < 25; i++) {
  photoDescriptions.push(createPhotoDescription(i + 1));
}
console.log(photoDescriptions);
