# The Winds Of Change - Ariana Banos

## Introduction

This program lets you read a poem from a text file. You can enter a line number to see the line from the poem. 
If you enter a bad line number or if something's wrong, it will let you know.

## Setup
Before running the program, make sure you have the following installed:

   Node.js: This program requires Node.js to run. You can download it from nodejs.org.


## How to Run

Open terminal and run the following:

### Command
      node readpoem.js 

### User Input
| Input  | Description                     |
|--------|---------------------------------|
| number | Any digit from 1 to 16 (e.g., 1, 2, 3... 16)|
|   q    | To quit the program              |

### Sample Output with Valid Input and Errors

        ✨ Welcome to Poem Reader! ✨

        📜The Winds of Change - Ariana Banos

        Enter a line number (or "q" to quit): 1
        The winds of change are blowing strong

        Enter a line number (or "q" to quit): 6
        But it's what we need to find a cure

        Enter a line number (or "q" to quit): 14
        And trust the journey won't be strange

        Enter a line number (or "q" to quit): 15
        Error: The selected line is blank or contains only a new line.

        Enter a line number (or "q" to quit): 20
        Error: Line number exceeds the number of lines in the file.

        Enter a line number (or "q" to quit): asd
        Please enter a valid line number.
        
        Enter a line number (or "q" to quit): Q
        Goodbye! Have a good day!

### Error Handling
If you enter a value that is not a number or "q", you will see a message like:

        Please enter a valid line number.

If the line number exceeds the total number of lines, or if the selected line is blank, you will see one of the following messages:

        Line number exceeds the number of lines in the file.

     or

        Error: The selected line is blank or contains only a new line.

