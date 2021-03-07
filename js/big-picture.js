export const showBigPicture = (photoDescription) => {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img').children[0].src = photoDescription.url;
  bigPicture.querySelector('.likes-count').textContent = photoDescription.likes;
  bigPicture.querySelector('.comments-count').textContent = photoDescription.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photoDescription.description;
  const comments = bigPicture.querySelector('.social__comments');
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
  for (let com of photoDescription.comments) {
    addComment(com);
  }

}
