import '/ui-kit.scss';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    format: {
    to: function (value) {
        return Math.trunc(value) + '₽';
    },
		    from: function (value) {
        return Math.trunc((value.replace('', '')));
    },
  },
    range: {
        'min': 0,
        'max': 15000
    }
  });
var sliderValueElement = document.getElementById('slider-range-value');

slider.noUiSlider.on('update', function (values, handle, unencoded) {
    sliderValueElement.innerHTML = values.join(' - ');
});