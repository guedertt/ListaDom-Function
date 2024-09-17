const wrapper = document.querySelector('#wrapper');
const input = wrapper.querySelector('input');
const button = wrapper.querySelector('button');

button.addEventListener('click', () => {
  if (input.value === 'OFF') {
    input.value = 'Ativado';
  } else {
    input.value = 'Desativado';
  }
});
