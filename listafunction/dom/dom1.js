const input = document.querySelector('#input');
const tabuadaDiv = document.querySelector('#tabuada');

input.addEventListener('input', () => {
    const number = parseInt(input.value);
    
   
    if (isNaN(number)) {
        tabuadaDiv.innerHTML = '';
        return;
    }
    
    let tabuadaHTML = '';
    for (let i = 1; i <= 10; i++) {
        tabuadaHTML += `<p>${number} x ${i} = ${number * i}</p>`;
    }
    tabuadaDiv.innerHTML = tabuadaHTML;
});
