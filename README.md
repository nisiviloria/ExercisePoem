# The Winds Of Change - Ariana Banos

## Introduction

This program lets you read a poem from a text file. You can enter a line number to see the line from the poem. 
If you enter a bad line number or if something's wrong, it will let you know.

## How to Run

Open terminal and run the following:

### Command
node trypoem.js 

### Prompt

     Welcome to Poem Reader!

The Winds of Change - Ariana Banos

Enter a line number (or "q" to quit):

### User Input
| Input  | Description                     |
|--------|---------------------------------|
| number | Any digit (e.g., 1, 2, 3)        |
| q      | To quit the program              |

### Error Handling
If you enter a value that is not a number or "q", you will see a message like:

Please enter a valid line number.

If the line number exceeds the total number of lines or if the line is blank, you will see:

Line number exceeds the number of lines in the file.

or

Error: The selected line is blank or contains only a new line.

### Sample Output

        Welcome to Poem Reader!

   The Winds of Change - Ariana Banos

Enter a line number (or "q" to quit): 1
The winds of change are blowing strong
Enter a line number (or "q" to quit): 2
It's time to leave the past and move along
Enter a line number (or "q" to quit): 3
With every gust, a new beginning
Enter a line number (or "q" to quit): 4
A chance to grow, to start winning
Enter a line number (or "q" to quit): 5
Change can be scary, that's for sure
Enter a line number (or "q" to quit): 6
But it's what we need to find a cure
Enter a line number (or "q" to quit): 14
And trust the journey won't be strange
Enter a line number (or "q" to quit): 15
Error: The selected line is blank or contains only a new line.
Enter a line number (or "q" to quit): 16
And live to see a brighter day.
Enter a line number (or "q" to quit): 17
Line number exceeds the number of lines in the file.
Enter a line number (or "q" to quit): asd
Please enter a valid line number.
Enter a line number (or "q" to quit): Q
Goodbye! Have a good day!
