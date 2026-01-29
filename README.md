# Online Quiz – Web Basics Check

## Project Overview
This project is an interactive online quiz web application designed to test a user’s knowledge of basic web technologies. Users answer a series of multiple-choice questions, receive instant feedback, and are shown a final score at the end of the quiz.

The project demonstrates the use of HTML, CSS, and JavaScript to build a responsive, accessible, front-end web application with meaningful user interaction.

---

## Purpose & Value to the User
The quiz provides users with:
- A simple and engaging way to test their understanding of web fundamentals
- Immediate feedback after each question
- A clear final score to measure performance

The application is easy to navigate, visually clear, and designed with usability and accessibility in mind.

---

## Features
- Multiple-choice quiz questions
- Questions loaded in a random order on each attempt
- Instant feedback (“Correct” / “Wrong”) after selecting an answer
- Score tracking throughout the quiz
- Final score summary at the end
- Restart functionality to retake the quiz
- Dedicated **How-To** page explaining how the quiz works

---

## How to Use
1. Open the **How To** page to read the quiz instructions.
2. Click **Start Quiz** to begin.
3. Read each question and select one answer.
4. View feedback for each question.
5. Questions advance automatically after selecting an answer.
6. At the end of the quiz, view your final score.
7. Click **Restart** to try again.

---

## Technologies Used
- **HTML5** – structure and content
- **CSS3** – layout, styling, and responsive design
- **JavaScript (ES6)** – quiz logic, interactivity, score tracking, and randomisation

---

## Accessibility & UX Considerations
- Clear heading hierarchy and readable text
- High contrast between text and background colours
- Buttons clearly labelled and provide visual feedback
- Logical navigation and predictable interactions
- Mobile-friendly layout using responsive design principles

---

## File Structure
ONLINE-QUIZ/
│
├── css/
│   └── style.css
├── js/
│   └── main.js
├── how-to.html
├── index.html
└── README.md


---

## Code Quality
- All HTML and CSS written manually and structured clearly
- JavaScript code organised into logical sections with clear variable naming
- No external libraries were used
- File names are lowercase and descriptive
- Code is separated by responsibility (HTML / CSS / JS)

---

## Testing

### 1️⃣ HTML Validation
- Tool used: [W3C Markup Validator](https://validator.w3.org/)  
- Files checked: `index.html` and `how-to.html`  
- Outcome:  
  - `index.html`: No errors or warnings  
  - `how-to.html`: No errors or warnings (fixed invalid `<button>` inside `<a>` earlier)  
- Notes: All HTML elements are semantic and correctly nested.  

### 2️⃣ CSS Validation
- Tool used: [W3C CSS Validator](http://jigsaw.w3.org/css-validator/)  
- File checked: `css/style.css`  
- Outcome: No errors or warnings  
- Notes: Styling is consistent, uses a maximum of three colors (grey, black, green, with blue for links), and all classes are valid.  

### 3️⃣ JavaScript Validation
- Tool used: [JSHint](https://jshint.com/)  
```js
/* jshint esversion: 6 */
/* jshint browser: true */

File checked: js/main.js

Outcome: No syntax errors; all variables and functions properly defined

Notes: Quiz logic, scoring, and feedback functions correctly.

4️⃣ Functional (Manual) Testing
Test	Steps	Expected Outcome	Actual Outcome
Quiz loads	Open index.html or live GitHub Pages URL	First question displayed, score 0	✅ Works
Answer correct	Select correct answer	Button turns green, score increments by 1	✅ Works
Answer incorrect	Select incorrect answer	Correct answer turns green, feedback displayed, score does not increment	✅ Works
Question progression	Wait after answering	Next question automatically displays	✅ Works
Final score	Complete all questions	“Your final score is X out of 3” shown once, restart button visible	✅ Works
Restart quiz	Click restart button	Score resets, first question displayed	✅ Works
How-To navigation	Click “How to Take the Quiz”	Dedicated instructions page opens, link blue	✅ Works
Responsive design	Resize browser window	Layout remains centered, readable, no horizontal scroll	✅ Works
Accessibility / UX	Review contrast, headings, button labels	High contrast, clear headings, readable text	✅ Works

5️⃣ Browser Testing

Browsers tested: Chrome (latest), Firefox (latest)

Outcome: Quiz functions correctly on both browsers

✅ Summary: All code validation and functional tests passed successfully. Quiz behaves exactly as intended across browsers and screen sizes.

Code Validation & Quality Checks

Corrected HTML5 void elements (removed trailing slashes on <meta>)

Removed unnecessary role="main" from <main>

Fixed invalid <button> inside <a> on How-To page

All HTML, CSS, and JS pass validation with no errors

Deployment

Project deployed using GitHub Pages

Steps:

Push the project to GitHub repository

Go to Settings → Pages

Select main (or master) branch as source

Save to generate live URL

Author

Alan Baum
Online Quiz – Project 1



