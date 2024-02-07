// obtendo elementos.
const input = document.querySelector('#carta-texto');
const pResult = document.querySelector('#carta-gerada');
const buttonCreateLetter = document.querySelector('#criar-carta');
const pLetterCounter = document.querySelector('#carta-contador');

// configurando elementos.
buttonCreateLetter.innerText = 'criar carta';
input.classList.add('inline-block-widgets');
buttonCreateLetter.classList.add('inline-block-widgets');

// código.

function containsOnlySpaces(string) {
  return /^\s+$/.test(string);
}

const classes = [
  ['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright'],
];

function randomNumber(number) {
  return Math.floor(Math.random() * number);
}

function randomClasses() {
  const chosenClasses = [];
  for (let indexClass = 0; indexClass < classes.length; indexClass += 1) {
    const classList = classes[indexClass];
    const chosenClass = classList[randomNumber(classList.length - 1)];
    chosenClasses.push(chosenClass);
  }
  return chosenClasses;
}

function randomizeClasses(event) {
  event.target.className = '';
  const classes = randomClasses();
  for (let indexClass = 0; indexClass < classes.length; indexClass += 1) {
    const classChoiced = classes[indexClass];
    event.target.classList.add(classChoiced);
  }
}

function createLetter() {
  pResult.innerHTML = '';
  if (!input.value || containsOnlySpaces(input.value)) {
    pResult.innerText = 'Por favor, digite o conteúdo da carta.'
  }
  const textSplited = input.value.split(' ');
  pLetterCounter.innerText = textSplited.length;
  for (let indexWord = 0; indexWord < textSplited.length; indexWord += 1) {
    const word = textSplited[indexWord];
    const span = document.createElement('span');
    span.innerText = word;
    const classes = randomClasses();
    for (let indexClass = 0; indexClass < classes.length; indexClass += 1) {
      const chosenClass = classes[indexClass];
      span.classList.add(chosenClass);
    }
    span.addEventListener('click', randomizeClasses);
    pResult.appendChild(span)
  }
}

buttonCreateLetter.addEventListener('click', createLetter);
