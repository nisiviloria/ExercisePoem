console.log('\n\tWelcome to Poem Reader!');
console.log('\n   The Winds of Change - Ariana Banos\n');

const fs = require('fs');
const readline = require('readline');

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askForLineNumber() {
  userInput.question('Enter a line number (or "q" to quit): ', (input) => {
    if (input.toLowerCase() === 'q') {
      console.log('Goodbye! Have a good day!');
      userInput.close();
      return;
    }

    const lineNumber = Number(input);

    if (isNaN(lineNumber) || lineNumber <= 0) {
      console.log('Please enter a valid line number.');
      askForLineNumber();
      return;
    }


    fs.readFile('poem.txt', 'utf8', (err, data) => {
      if (err) {
        console.log('Error reading file:', err);
        askForLineNumber();
        return;
      }

      const lines = data.split('\n');
      if (lineNumber > lines.length) {
        console.log('Line number exceeds the number of lines in the file.');
      } else {
        const line = lines[lineNumber - 1];
        if (line !== undefined) {
          console.log(line);
        } else {
          console.log('Line number does not exist.');
        }
      }
      askForLineNumber(); 
    });
  });
}

askForLineNumber();
