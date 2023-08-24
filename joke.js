const boxes = document.querySelectorAll('.box');

document.getElementById('changeBox1').addEventListener('click', () => {
  changeBoxColor(boxes[0]);
});
document.getElementById('changeBox2').addEventListener('click', () => {
    changeBoxColor(boxes[0]);
  });
  document.getElementById('changeBox3').addEventListener('click', () => {
    changeBoxColor(boxes[0]);
  });

// Add similar event listeners for other buttons...

document.getElementById('resetColors').addEventListener('click', () => {
  resetBoxColors();
});

document.getElementById('resetColors').addEventListener('click', () => {
    resetBoxColors();
  });

// Add similar event listeners for other buttons...

function changeBoxColor(box) {
  box.style.backgroundColor = 'green';
  box.style.border = '2px solid yellow';
}

function resetBoxColors() {
  boxes.forEach(box => {
    box.style.backgroundColor = '';
    box.style.border = '2px solid black';
  });
}
