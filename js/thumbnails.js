import {photoDescriptions} from './mock.js';

const picturesOtherUsersList = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');
const pictureOtherUserTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

photoDescriptions.forEach(({url,likes,comments}) => {
  const pictureOtherUser = pictureOtherUserTemplate.cloneNode(true);
  pictureOtherUser.querySelector('.picture__img').src = url;
  pictureOtherUser.querySelector('.picture__likes').textContent = likes;
  pictureOtherUser.querySelector('.picture__comments').textContent = comments.length;
  picturesOtherUsersList.appendChild(pictureOtherUser);
});

pictures.appendChild(picturesOtherUsersList);
