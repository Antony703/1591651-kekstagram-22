import {clearComments} from './util.js'

const bigPicture = document.querySelector('.big-picture');
 const closeButton = bigPicture.querySelector('#picture-cancel');

 const closeBigPicture = function () {
   bigPicture.classList.add('hidden');
 }

 const onClickcloseButton = function () {
   closeBigPicture();
   closeButton.removeEventListener('click', onClickcloseButton);
 }

 const onPressEsc = function (evt) {
   if (evt.key === ('Escape' || 'Esc')) {
     evt.preventDefault();
     closeBigPicture();
     document.removeEventListener('keydown', onPressEsc);
   }
 }

 const comments = bigPicture.querySelector('.social__comments');


 const showBigPicture = (photoDescription) => {

   bigPicture.classList.remove('hidden');
   closeButton.addEventListener('click', onClickcloseButton);
   document.addEventListener('keydown', onPressEsc);

   bigPicture.querySelector('.big-picture__img').children[0].src = photoDescription.url;
   bigPicture.querySelector('.likes-count').textContent = photoDescription.likes;
   bigPicture.querySelector('.comments-count').textContent = photoDescription.comments.length;
   bigPicture.querySelector('.social__caption').textContent = photoDescription.description;

   const addComment = (comment) => {
     const newComment = document.createElement('li');
     newComment.classList.add('social__comment');
     const newCommentImage = document.createElement('img');
     newCommentImage.classList.add('social__picture');
     newCommentImage.src = comment.avatar;
     newCommentImage.alt = comment.name;
     newCommentImage.width = '35';
     newCommentImage.height = '35';
     newComment.appendChild(newCommentImage);
     const newCommentText = document.createElement('p');
     newCommentText.classList.add('social__text');
     newCommentText.textContent = comment.message;
     newComment.appendChild(newCommentText);
     comments.appendChild(newComment);
   }

   clearComments(comments);

   for (let com of photoDescription.comments) {
     addComment(com);
   }
 }
 export {
   showBigPicture
 };
