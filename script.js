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

function handleWordCount() {
   const totalWords = inputElement.value.split(" ").length;
   outputElement.value = `Total Words are : ${totalWords}`;
}

function handleCharacterCount() {
    const inputText = inputElement.value;
    outputElement.value = `Character count : ${inputText.length}`;
}