# JS-Fundamentals

This repository contains JavaScript exercises to practice fundamental concepts.

## Project Structure
- `0-javascript_is_amazing.js`: A script that declares a constant variable `myVar` with the value "JavaScript is amazing" and prints it using `console.log`.
- `1-multi_languages.js`: A script that prints three lines: "C is fun", "Python is cool", and "JavaScript is amazing" using `console.log`.
- `2-arguments.js`: A-argument" (0 args), "Argument found" (1 arg), or "Arguments found" (2+ args).
- `3-value_argument.js`: A script that prints the first argument passed to it, or "No argument" if none is provided, using `console.log`.
- `4-concat.js`: A script that prints two arguments in the format "<arg1> is <arg2>", or "undefined is undefined" if no arguments are provided.
- `5-to_integer.js`: A script that prints "My number: <first argument converted to integer>" if the first argument can be converted to an integer, or "Not a number" otherwise.

## Usage
To run the JavaScript files:
1. Ensure Node.js is installed.
2. Navigate to the repository directory:
   ```bash
   cd JS-Fundamentals
   ```
3. Run a script, e.g.:
   ```bash
   node 5-to_integer.js 89
   ```
4. Expected output for 5-to_integer.js:
   ```
   My number: 89
   ```

## Requirements
- Node.js
- No use of `var` (use `const` or `let` instead)
- For 5-to_integer.js, no use of `try/catch`
