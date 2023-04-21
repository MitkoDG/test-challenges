const ballBox = new Map();
let colorCount = new Map();
let ballCount = 0;

const addBallBtn = document.getElementById('add-ball-btn');
const removeBallBtn = document.getElementById('remove-ball-btn');
const inputField = document.getElementById('input-field');
const result = document.getElementById('result');

addBallBtn.addEventListener('click', (e) => {
    e.preventDefault();
  const input = inputField.value.trim();

  if (input.toLowerCase() === 'end') {
    inputField.value = '';
    inputField.disabled = true;
    addBallBtn.disabled = true;
    removeBallBtn.disabled = false;
    return;
  }

  const [color, count] = input.split(':').map(str => str.trim());
  console.log(ballBox);
  console.log(colorCount);
  console.log(ballCount);

  if (!color || !count || isNaN(parseInt(count))) {
    alert('Please enter a valid input in the format "Color: count"');
    return;
  }

  ballBox.set(ballCount++, color);
  colorCount.set(color, (colorCount.get(color) || 0) + parseInt(count));

  inputField.value = '';
});

removeBallBtn.addEventListener('click', (e) => {
    e.preventDefault();
  if (ballBox.size === 0) {
    // console.log(ballBox.size);
    return;
  }

  const lastBallColor = ballBox.get(--ballCount);

  if (!colorCount.has(lastBallColor)) {
    return;
  }

  const count = colorCount.get(lastBallColor) - 1;

  if (count === 0) {
    colorCount.delete(lastBallColor);
  } else {
    colorCount.set(lastBallColor, count);
  }

  if (colorCount.size === 1) {
    const remainingColor = colorCount.keys();
    console.log(remainingColor);
    const ballsToRemove = 0; // TODO
    // TODO logic for removing the ball
    result.textContent = `Smallest count of balls to remove: ${ballsToRemove}`;
    result.classList.remove('hidden');
    inputField.disabled = true;
    removeBallBtn.disabled = true;
  }
});

inputField.focus();