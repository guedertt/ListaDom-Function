const button = document.querySelector('#button');
const input = document.querySelector('#input');

button.addEventListener('click', () => {
  input.value = 'olá mundo';
});