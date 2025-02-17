//your JS code here. If required.
const container = document.querySelector('.container');

// Create 800 boxes dynamically
for (let i = 0; i < 800; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
}
