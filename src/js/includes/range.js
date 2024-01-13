import Slider from 'bootstrap-slider/dist/bootstrap-slider';
import 'bootstrap-slider/dist/css/bootstrap-slider.css';

const range = () => {
    const rangeInput = document.getElementById('range-input');

    if (rangeInput) {
        const range = new Slider("#range-input", {
            tooltip: 'hide',
        });

        const minSliderValue = rangeInput.getAttribute("data-slider-min");
        const maxSliderValue = rangeInput.getAttribute("data-slider-max");

        const rangeMin = document.getElementById('range-min');
        const rangeMax = document.getElementById('range-max');

        range.on('slide', function(slider) {
            rangeMin.value = slider[0];
            rangeMax.value = slider[1];
        });

        rangeMin.addEventListener('keyup', function() {
            let val = Math.abs(parseInt(this.value, 10) || minSliderValue);
            let maxVal = parseInt(rangeMax.value);

            this.value = val > maxSliderValue ? maxSliderValue : val;
            range.setValue([val, maxVal]);
        });

        rangeMax.addEventListener('keyup', function() {
            let val = Math.abs(parseInt(this.value, 10) || maxSliderValue);
            let minVal = parseInt(rangeMin.value);

            this.value = val > maxSliderValue ? maxSliderValue : val;
            range.setValue([minVal, val]);
        });
    }
}

export default range;