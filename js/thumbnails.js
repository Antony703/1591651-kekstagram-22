import {photoDescriptions} from './mock.js';
import {showBigPicture} from './big-picture.js';


const picturesOtherUsersList = document.createDocumentFragment();
const pictures = document.querySelector('.pictures');
const pictureOtherUserTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

photoDescriptions.forEach((photoDescription) => {
  const pictureOtherUser = pictureOtherUserTemplate.cloneNode(true);
  pictureOtherUser.querySelector('.picture__img').src = photoDescription.url;
  pictureOtherUser.querySelector('.picture__likes').textContent = photoDescription.likes;
  pictureOtherUser.querySelector('.picture__comments').textContent = photoDescription.comments.length;
  picturesOtherUsersList.appendChild(pictureOtherUser);
  pictureOtherUser.addEventListener('click',()=> {
    showBigPicture(photoDescription);
  });
});

pictures.appendChild(picturesOtherUsersList);
