const boxes = document.querySelectorAll('.box');

document.getElementById('changeBox1').addEventListener('click', () => {
  changeBoxStyle(boxes[0]);
});

document.getElementById('changeBox2').addEventListener('click', () => {
  changeBoxStyle(boxes[1]);
});

document.getElementById('changeBox3').addEventListener('click', () => {
  changeBoxStyle(boxes[2]);
});

document.getElementById('changeAll').addEventListener('click', () => {
  boxes.forEach(box => changeBoxStyle(box));
});

document.getElementById('hideBox1').addEventListener('click', () => {
  hideBox(boxes[0]);
});

document.getElementById('hideBox2').addEventListener('click', () => {
  hideBox(boxes[1]);
});

document.getElementById('hideBox3').addEventListener('click', () => {
  hideBox(boxes[2]);
});

document.getElementById('hideAll').addEventListener('click', () => {
  boxes.forEach(box => hideBox(box));
});

document.getElementById('resetColors').addEventListener('click', () => {
  resetBoxColors();
});

document.getElementById('showAll').addEventListener('click', () => {
  boxes.forEach(box => box.style.display = 'block');
});

function changeBoxStyle(box) {
  const bgColor = getRandomColor();
  const borderColor = getRandomColor();

  box.style.backgroundColor = bgColor;
  box.style.borderColor = borderColor;
}

function hideBox(box) {
  box.style.display = 'none';
}

function resetBoxColors() {
  boxes.forEach((box, index) => {
    box.style.backgroundColor = '';
    box.style.borderColor = 'black';
  });
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}