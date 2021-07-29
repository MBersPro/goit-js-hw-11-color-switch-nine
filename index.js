const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  const body = document.querySelector('body');
  const startBtn = document.querySelector('#buttonStart');
  const stopBtn = document.querySelector('#buttonStop');
  let interval;

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  function recalculateСolor(colorsList) {
    const randomColor = randomIntegerFromInterval(0, colorsList.length);
    body.style.background = colorsList[randomColor];
  }
  
  startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    interval = setInterval(() => {
        recalculateСolor(colors);
        stopBtn.style.cursor = "pointer";
        startBtn.style.cursor = "not-allowed";

    },200);
  });
  
  stopBtn.addEventListener('click', () => {
    startBtn.disabled = false;
    startBtn.style.cursor = "pointer";
    stopBtn.style.cursor = "not-allowed";
    clearInterval(interval);
  },);