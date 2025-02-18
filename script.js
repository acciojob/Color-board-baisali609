//your JS code here. If required.
const containers = document.querySelector('.container');
for (let i = 0; i < 800; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  containers.appendChild(square);
}
