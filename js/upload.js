import {zoomPhoto} from './scale.js';
import {selectEffect, removePictureEffect} from './effects.js';
import {checkHashTags,removeTagListeners} from './hash.js';


const uploadButton = document.querySelector('#upload-file');
const editForm = document.querySelector('.img-upload__overlay');
const modalOpen = document.querySelector('body');
const cancelUploadButton = document.querySelector('#upload-cancel');

const onPressEsc = function (evt) {
  if (evt.key === ('Escape' || 'Esc')) {
    evt.preventDefault();
    closeEditPhoto();
  }
}
const showEditPhoto = function () {
  modalOpen.classList.add('modal-open');
  editForm.classList.remove('hidden');
  cancelUploadButton.addEventListener('click', closeEditPhoto);
  document.addEventListener('keydown', onPressEsc)
}
const closeEditPhoto = function () {
  modalOpen.classList.remove('modal-open');
  editForm.classList.add('hidden');
  cancelUploadButton.removeEventListener('click', closeEditPhoto);
  document.removeEventListener('keydown', onPressEsc);
  uploadButton.value = '';
  removePictureEffect();
  removeTagListeners();
}

const editPhoto = function () {
  showEditPhoto();
  zoomPhoto();
  selectEffect();
  checkHashTags();
}

uploadButton.addEventListener('change', editPhoto);
