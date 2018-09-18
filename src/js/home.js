window.onload = function() {
  const letters = document.body.querySelectorAll('#title > .colored');
  const letterColors = [
    '#1b75bc',
    '#bc441b',
    '#901bbc',
    '#1bbc84'
  ];

  letters.forEach((el) => {
    el.style.color = letterColors[randomIntFromInterval(0, letterColors.length-1)];
  });

  // fade in elements
  document.getElementById('content').classList.add('show');
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
