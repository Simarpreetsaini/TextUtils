document.getElementById('toggleColor').addEventListener('click', function() {
    const body = document.body;
    const toggleText = document.getElementById('toggleText');
    const toggleButton = document.getElementById('toggleColor');
    
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        toggleText.textContent = 'Off';
        toggleButton.classList.remove('active');
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        toggleText.textContent = 'On';
        toggleButton.classList.add('active');
    }
});

function convertToUppercase() {
    const inputText = document.getElementById('inputText');
    inputText.value = inputText.value.toUpperCase();
}

function convertToLowercase() {
    const inputText = document.getElementById('inputText');
    inputText.value = inputText.value.toLowerCase();
}

function eraseText() {
    const inputText = document.getElementById('inputText');
    inputText.value = '';
}

function removeExtraSpaces() {
    const inputText = document.getElementById('inputText');
    inputText.value = inputText.value.replace(/\s+/g, ' ').trim();
}

let textArray = "Hello, I am Simar... How are you?";
let textIndex = 0;
let animatedTextContainer = document.getElementById('animatedTextContainer');

function typeText() {
    if (textIndex < textArray.length) {
        animatedTextContainer.textContent += textArray.charAt(textIndex);
        textIndex++;
        setTimeout(typeText, 100);
    } else {
        clearInterval(typeInterval);
    }
}

let typeInterval = setInterval(typeText, 100);
