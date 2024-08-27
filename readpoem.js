const fs = require('fs');
const readline = require('readline');

console.log('\n\tWelcome to Poem Reader!');
console.log('\n   The Winds of Change - Ariana Banos\n');

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askForLineNumber() {
  userInput.question('Enter a line number (or "q" to quit): ', handleUserInput);
}

function handleUserInput(input) {
  if (input.toLowerCase() === 'q') {
    console.log('Goodbye! Have a good day!');
    return userInput.close();
  }

  const lineNumber = Number(input);
  if (isNaN(lineNumber) || lineNumber <= 0) {
    console.log('Please enter a valid line number.');
    return askForLineNumber();
  }

  readPoemFile(lineNumber);
}

function readPoemFile(lineNumber) {
  fs.readFile('poem.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err.message);
      return askForLineNumber();
    }

    const lines = data.split('\n');
    if (lineNumber > lines.length) {
      console.log('Line number exceeds the number of lines in the file.');
    } else if (lines[lineNumber - 1].trim() === '') {
      console.log('Error: The selected line is blank or contains only a new line.');
    } else {
      console.log(lines[lineNumber - 1]);
    }

    askForLineNumber();
  });
}

askForLineNumber();

module.exports = { askForLineNumber, handleUserInput, readPoemFile };
