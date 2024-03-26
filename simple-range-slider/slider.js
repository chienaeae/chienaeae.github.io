const slider = document.getElementById("slider");
const sliderValueBox = document.getElementById("slider-value-box-01");

popRangeValue();

function popRangeValue() {
  setValue = () => {
    const newValue = Number(
      ((slider.value - slider.min) * 100) / (slider.max - slider.min)
    );
    const newPosition = 10 - newValue * 0.2;
    sliderValueBox.innerHTML = `<span>${slider.value}</span>`;
    sliderValueBox.style.left = `calc(${newValue}% + (${newPosition}px))`;
  };

  document.addEventListener("DOMContentLoaded", setValue);
  slider.addEventListener("input", setValue);
}
