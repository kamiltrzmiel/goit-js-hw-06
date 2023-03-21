const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');

inputEl.addEventListener('input', event => {
  if (event.currentTarget.value.length === 0) {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = event.currentTarget.value;
  }
});
