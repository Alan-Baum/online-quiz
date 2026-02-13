Online Quiz – Web Basics Check
## Project Overview

This project is an interactive online quiz web application designed to test a user’s knowledge of fundamental web technologies. Users answer multiple-choice questions, receive immediate visual feedback, and are shown a final score at the end of the quiz.

The project demonstrates practical use of HTML, CSS, and JavaScript to build a responsive and accessible front-end application with clear structure and separation of concerns.

## Purpose

Test understanding of web fundamentals

Provide instant feedback

Display a final score out of 10

Allow repeat attempts with reshuffled questions

## Features

10 multiple-choice questions

Questions load in a random order on each attempt

Strict answer mode:

Selected answer turns green if correct

Selected answer turns red if incorrect

Correct answers are not revealed when an incorrect option is chosen

Automatic progression between questions

Real-time score tracking

Restart button reshuffles questions

## Technologies Used

HTML5 – Semantic structure

CSS3 – Layout and responsive styling

JavaScript (ES6) – Quiz logic, scoring, validation, and randomisation

No external libraries were used.

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

All HTML and CSS written manually and structured clearly

JavaScript organised into logical sections with clear variable naming

No external libraries were used

File names are lowercase and descriptive

Code separated by responsibility (HTML / CSS / JS)

## Testing

The project was validated and manually tested to ensure correct functionality and standards compliance.

## HTML Validation

Tool used: W3C Markup Validator

Files checked: index.html, how-to.html

Outcome:

index.html: No errors or warnings

how-to.html: No errors or warnings

All HTML elements are semantic and correctly nested.

## CSS Validation

Tool used: W3C CSS Validator

File checked: css/style.css

Outcome:

No errors or warnings

Styling is consistent and all classes are valid.

## JavaScript Validation

Tool used: JSHint

Configuration used:

/* jshint esversion: 6 */
/* jshint browser: true */


File checked: js/main.js

Outcome:

No syntax errors

## Functional Testing

| Test                 | Expected Result                                               | Outcome |
| -------------------- | ------------------------------------------------------------- | ------- |
| Quiz loads           | First question displays with score set to 0                   | Pass    |
| Correct answer       | Selected button turns green and score increments              | Pass    |
| Incorrect answer     | Selected button turns red and score remains unchanged         | Pass    |
| Question progression | Next question loads automatically after selection             | Pass    |
| Final score          | “Your final score is X out of 10” displays once at completion | Pass    |
| Restart              | Score resets and questions reshuffle                          | Pass    |
| Responsive design    | Layout remains readable on smaller screens                    | Pass    |


## Browser Testing

Tested on latest versions of:

Google Chrome

Mozilla Firefox

The quiz performs consistently across tested browsers.

## Deployment

Project deployed using GitHub Pages.

Steps:

Push project to GitHub repository

Navigate to Settings → Pages

Select the main branch as the source

Save to generate the live site URL

## Future Improvements

Add question categories

Add difficulty levels

Implement timed quiz mode

Store high scores using localStorage

Expand the question bank

## Author

Alan Baum
Online Quiz – Project 1

