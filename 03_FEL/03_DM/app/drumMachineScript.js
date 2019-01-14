const slider = document.getElementById('slider');
const output = document.getElementById('slider-val');
output.innerHTML = slider.value;

slider.oninput = () => {
   output.innerHTML = this.value
};
