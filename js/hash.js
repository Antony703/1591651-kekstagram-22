const hashTagInput = document.querySelector('.text__hashtags');
const userComments = document.querySelector('.text__description');

const preCheck = function (tag) {
  if (tag.match(/^[^a-zA-ZА-Яа-яЁё0-9_ #]*$/)) {
    hashTagInput.setCustomValidity('Используйте только буквы, цифры, пробел и # для ввода хештегов');
  } else if (tag[0] != '#') {
    hashTagInput.setCustomValidity('Хештеги должны начинаться с символа "#"');
  } else if (tag.length === 1) {
    hashTagInput.setCustomValidity('Хештег должен состоять как минимум из 1 символа помимо"#"');
  } else if (tag.length > 20) {
    hashTagInput.setCustomValidity('Максимальная длина хештега - 20 символов');
  } else {
    hashTagInput.setCustomValidity('');
  }
  hashTagInput.reportValidity();
}

const checkForDoubles = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true
    }
  }
}
const hashString = function () {
  const tags = hashTagInput.value.toLowerCase().split(' ');

  tags.forEach(preCheck);

  if (tags.length > 5) {
    hashTagInput.setCustomValidity('Разрешается не более 5 хештегов');
  } else if (checkForDoubles(tags)) {
    hashTagInput.setCustomValidity('Не допускается дублирование хеш-тегов');
  }
  // console.log(tags)
}
const onEscPreventExt = function (evt) {
  if (evt.key === ('Escape' || 'Esc')) {
    evt.target.blur();
    evt.stopPropagation();
  }
}
const removeTagListeners = function() {
  hashTagInput.removeEventListener('input', hashString);
  hashTagInput.removeEventListener('keydown', onEscPreventExt);
  userComments.removeEventListener('keydown', onEscPreventExt);
}

const checkHashTags = function () {
  hashTagInput.addEventListener('input', hashString);
  hashTagInput.addEventListener('keydown', onEscPreventExt);
  userComments.addEventListener('keydown', onEscPreventExt);
}
// console.log(tagsArray);
export {
  checkHashTags,removeTagListeners
};
// при вводе строки выполняем проверку на наличие недопустимых симоволов. далее проводим разбиение на отдельные теги и проверяем на остальыне условия.
