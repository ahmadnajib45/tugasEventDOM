const button = document.getElementById('changeColor');
const text = document.getElementById('text');
const color = document.getElementById('color');

const hoverText = document.getElementById('hoverText');

const inputField = document.getElementById('inputField');
const displayText = document.getElementById('displayText');
const textList = document.getElementById('textList');

const colors = ['black', 'green', 'blue', 'Yellow'];

const addItem = document.getElementById('addItem');

button.addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    text.textContent = randomColor;
    color.style.color = randomColor;
});


button.addEventListener('mouseover', function() {
    hoverText.textContent='Mouse berada pada tombol'
});

button.addEventListener('mouseout', function() {
    hoverText.textContent=''
});

inputField.addEventListener('keydown', function(event) {
    displayText.textContent = event.key;
});

addItem.addEventListener('click', function() {
    const inputValue = inputField.value.trim();
    if (inputValue !== '') {
        const li = document.createElement('li');
        li.textContent = inputValue;
        textList.appendChild(li);
        inputField.value = '';
    }
});