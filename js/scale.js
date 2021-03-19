const zoomOut = document.querySelector('.scale__control--bigger');
const zoomIn = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const scalePicture = document.querySelector('.img-upload__preview').children[0];
//let scale = 100;
const zoomPhoto = function () {
  let scale = 100;
  scalePicture.removeAttribute('style');
  scaleValue.value = scale + '%';
  zoomOut.addEventListener('click', () => {
    if (scale < 100) {
      scale += 25;
      scaleValue.value = scale + '%';
      scalePicture.setAttribute('style', `transform: scale(${scale/100})`);
    }
  });
  zoomIn.addEventListener('click', () => {
    if (scale > 25) {
      scale -= 25;
      scaleValue.value = scale + '%';
      scalePicture.setAttribute('style', `transform: scale(${scale/100})`);
    }
  });
  // scaleValue.addEventListener('change',(evt) =>{
  //   //alert('scale changed!');
  //   debugger;

  //   scalePicture.setAttribute('style',`transform: scale(${evt.target.value})`);
  // })
}
export {zoomPhoto};
