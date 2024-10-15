const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');

function handleUpperCase() {
    const inputText = inputElement.value;
    outputElement.value = inputText.toUpperCase();
}

function handleLowerCase() {
    const inputText = inputElement.value;
    outputElement.value = inputText.toLowerCase();
}

function handleWordCount() {}

function handleCharacterCount() {
    const inputText = inputElement.value;
    outputElement.value = `Character count : ${inputText.length}`;
}