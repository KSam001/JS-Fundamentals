# JS-Fundamentals

This repository contains JavaScript exercises to practice fundamental concepts.

## Project Structure
- `0-javascript_is_amazing.js`: A script that declares a constant variable `myVar` with the value "JavaScript is amazing" and prints it using `console.log`.
- `1-multi_languages.js`: A script that prints three lines: "C is fun", "Python is cool", and "JavaScript is amazing" using `console.log`.
- `2-arguments.js`: A script that prints a message based on the number of command-line arguments: "No argument" (0 args), "Argument found" (1 arg), or "Arguments found" (2+ args).
- `3-value_argument.js`: A script that prints the first argument passed to it, or "No argument" if none is provided, using `console.log`.
- `4-concat.js`: A script that prints two arguments in the format "<arg1> is <arg2>", or "undefined is undefined" if no arguments are provided.
- `5-to_integer.js`: A script that prints "My number: <first argument converted to integer>" if the first argument can be converted to an integer, or "Not a number" otherwise.
- `6-multi_languages_loop.js`: A script that prints three lines ("C is fun", "Python is cool", "JavaScript is amazing") using an array and a loop with one `console.log` per iteration.
- `7-multi_c.js`: A script that prints "C is fun" x times, where x is the first argument (a non-negative integer), or "Missing number of occurrences" if the argument is invalid, using two `console.log` statements and a loop.
- `8-square.js`: A script that prints a square of size x using 'X' characters, where x is the first argument (a positive integer), or "Missing size" if the argument is invalid, using a loop.
- `9-add.js`: A script that prints the sum of two integers passed as arguments using a function `add(a, b)`.
- `10-factorial.js`: A script that computes and prints the factorial of the first argument (cast as an integer) using a recursive function, with factorial of NaN being 1.

## Usage
To run the JavaScript files:
1. Ensure Node.js is installed.
2. Navigate to the repository directory:
   ```bash
   cd JS-Fundamentals
   ```
3. Run a script, e.g.:
   ```bash
   node 10-factorial.js 3
   ```
4. Expected output for 10-factorial.js:
   ```
   6
   ```

## Requirements
- Node.js
- No use of `var` (use `const` or `let` instead)
- For 5-to_integer.js, no use of `try/catch`
- For 6-multi_languages_loop.js, use an array and a loop, no `if/else`, one `console.log` per iteration
- For 7-multi_c.js, use two `console.log` statements and a loop
- For 8-square.js, use a loop to print a square of 'X' characters
- For 9-add.js, define a function `add(a, b)`
- For 10-factorial.js, use a recursive function to compute the factorial
