$(document).ready(function () {
  document.querySelectorAll('.filterRangeSliderPrice').forEach(slider => {
    const rangeMin = parseInt(slider.dataset.min);
    const rangeMax = parseInt(slider.dataset.max);
    const step = parseInt(slider.dataset.step);
    const filterInputs = slider.closest('.filterRangeSlider').querySelectorAll('input.filterRangeSlider__input');

    // Save original placeholders
    filterInputs[0].placeholder = "От";
    filterInputs[1].placeholder = "До";

    noUiSlider.create(slider, {
      start: [rangeMin, rangeMax],
      connect: true,
      step: step,
      range: {
        'min': rangeMin,
        'max': rangeMax
      },
      format: {
        to: value => Math.round(value),
        from: value => Number(value)
      }
    });

    slider.noUiSlider.on('update', (values, handle) => {
      const value = Math.round(values[handle]);
      filterInputs[handle].value = value !== rangeMin && value !== rangeMax ? value : ""; // Clear value if at min or max
      filterInputs[handle].placeholder = handle === 0 ? "От" : "До";
    });

    filterInputs.forEach((input, indexInput) => {
      input.addEventListener('change', () => {
        slider.noUiSlider.setHandle(indexInput, input.value || (indexInput === 0 ? rangeMin : rangeMax));
      });
    });
  });
});