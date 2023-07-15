const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circle = document.querySelectorAll('.circle');

var currentActive = 1;
next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circle.length) {
    currentActive = circle.length;
  }
  update();
});

prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive <= 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  // update the active classes
  circle.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  // update the progress bar

  var activeCircles = document.querySelectorAll('.active');
  progress.style.width =
    (activeCircles.length - 1) / (circle.length - 1) * 100 + '%';
}
