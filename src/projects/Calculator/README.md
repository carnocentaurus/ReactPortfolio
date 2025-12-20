# Calculator
A simple yet functional calculator application built with React, TypeScript, and Tailwind CSS. The calculator supports basic arithmetic operations, parentheses, and decimal values, with expression evaluation handled safely using the `mathjs` library.

## Features
- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Support for parentheses and decimal numbers
- Real-time expression input
- Clear display (AC) and backspace functionality
- Error handling for invalid expressions
- Responsive and clean calculator layout
- Color-coded buttons for improved usability

## Tech Stack
| Technology | Purpose |
|------------|---------|
| React | Component-based UI rendering |
| TypeScript | Type safety and predictable state |
| Tailwind CSS | Styling and responsive layout |
| mathjs | Mathematical expression evaluation |

## How It Works
1. The user clicks calculator buttons to build a mathematical expression.
2. Button inputs are appended to the display as a string.
3. Special actions include:
   - **AC**: Clears the entire display
   - **Backspace**: Removes the last character
4. When the **=** button is pressed:
   - The expression is evaluated using `mathjs.evaluate()`
   - If the result is a valid finite number, it is displayed
   - Invalid expressions return an `Error` message
5. The calculator prevents invalid numeric outputs such as `NaN` or `Infinity`.

## Screenshots
- Soon

## How to Run
1. Navigate to the project directory:
   ```bash
   cd src/projects/Calculator
2. Install dependencies
- `npm install`
3. Start development server
- `npm run dev`
4. Open the local development URL in your browser

## Future Improvements
- Add keyboard input support
- Add scientific calculator functions