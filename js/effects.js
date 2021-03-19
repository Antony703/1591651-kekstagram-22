  /* global noUiSlider:readonly */
  const effects = document.querySelector('.effects');
  const effectsList = effects.querySelector('.effects__list');
  const sliderElement = document.querySelector('.effect-level__slider');
  const effectLevel = document.querySelector('.effect-level__value');
  const picture = document.querySelector('.img-upload__preview').children[0];
  const effectsPatterns = [{
      effect: 'chrome',
      min: 0,
      max: 1,
      step: 0.1,
      unit: '',
      css: 'filter: grayscale'
    },
    {
      effect: 'sepia',
      min: 0,
      max: 1,
      step: 0.1,
      unit: '',
      css: 'filter: sepia'
    },
    {
      effect: 'marvin',
      min: 0,
      max: 100,
      step: 1,
      unit: '%',
      css: 'filter: invert',
    },
    {
      effect: 'phobos',
      min: 0,
      max: 3,
      step: 0.1,
      unit: 'px',
      css: 'filter: blur'
    },
    {
      effect: 'heat',
      min: 1,
      max: 3,
      step: 0.1,
      unit: '',
      css: 'filter: brightness'
    }
  ];
  // const applyEffect = function (evt) {
  // };

  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 0,
    step: 1,
    connect: 'lower'
  });
  sliderElement.parentElement.classList.add('hidden');

  const updateSliderOptions = function (element) {
    picture.className = `effects__preview--${element.effect}`;
    sliderElement.parentElement.classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: element.min,
        max: element.max
      },
      start: element.max,
      step: element.step
    });
  }
  const removePictureEffect = function () {
    picture.removeAttribute('style');
    picture.className = '';
    effectLevel.value = 'none';
    sliderElement.parentElement.classList.add('hidden');
  }

  const selectEffect = function () {
    effectsList.addEventListener('change', (evt) => {

      if (evt.target.matches('input[type="radio"]')) {

        effectsPatterns.forEach((element) => {
          if (evt.target.value === element.effect) {
            updateSliderOptions(element);

            sliderElement.noUiSlider.on('update', (value) => {
              picture.setAttribute('style', `${element.css}(${value}${element.unit})`);
              effectLevel.value = value;
            });
          } else
          if (evt.target.value === 'none') {
            picture.className = '';
            picture.removeAttribute('style');
            effectLevel.value = '';
            sliderElement.parentElement.classList.add('hidden')
          }
        });
      }
    });
  }
  export {
    selectEffect, removePictureEffect
  }
