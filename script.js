// obtendo elementos.
const input = document.querySelector('#carta-texto');
const pResult = document.querySelector('#carta-gerada');
const buttonCreateLetter = document.querySelector('#criar-carta');

// configurando elementos.
buttonCreateLetter.innerText = 'criar carta';
input.classList.add('inline-block-widgets');
buttonCreateLetter.classList.add('inline-block-widgets');

// código.

function createLetter() {
  pResult.innerHTML = '';
  const textSplited = input.value.split(' ');
  for (let indexWord = 0; indexWord < textSplited.length; indexWord += 1) {
    const word = textSplited[indexWord];
    const span = document.createElement('span');
    span.innerText = word;
    pResult.appendChild(span)
  }
}

buttonCreateLetter.addEventListener('click', createLetter);