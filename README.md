Secure Login Form

A simple and secure login form web application built using HTML, CSS, and JavaScript. It validates user input, provides real-time feedback, and follows basic security practices such as preventing XSS attacks.

Features

Email and password input fields

Email format validation

Password required validation

Error messages displayed below each field

Highlights invalid inputs with a red border

Displays success message on valid submission

Prevents form submission if validation fails

Uses safe DOM methods (textContent) to avoid XSS

Validation Rules

Email must follow a valid email format

Password field must not be empty

Security Considerations

Uses textContent instead of innerHTML to prevent XSS attacks

Prevents default form submission until validation passes

No unsafe rendering of user input

Project Structure

index.html – Structure of the login form

style.css – Styling and layout

script.js – Form validation and logic

How to Run

Download or clone the project

Open index.html in a web browser

Enter email and password to test validation

Technologies Used

HTML5

CSS3

Vanilla JavaScript

Future Improvements

Add password strength indicator

Show/hide password toggle

Connect to backend authentication system

Add "Remember Me" functionality
