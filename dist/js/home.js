window.onload = function() {
  const coloredItems = document.body.querySelectorAll('#content .colored');
  const colors = [
    '#1b75bc',
    '#bc441b',
    '#901bbc',
    '#1bbc84'
  ];

  coloredItems.forEach((el) => {
    el.style.color = colors[randomIntFromInterval(0, colors.length-1)];
  });

  // fade in elements
  document.getElementById('content').classList.add('show');
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
