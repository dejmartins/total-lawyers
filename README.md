# Total Lawyers

This project is a form-based web application designed to collect user information and dynamically update the user interface based on the user’s input. The project demonstrates best practices in frontend development, including DOM manipulation, responsiveness, and form validation.

# Features

- Responsive design for mobile and desktop
- Dynamic content updates based on user input
- Simple form validation

# Prerequisites

You need a code editor (like Visual Studio Code) and a way to run a local web server. You can use a simple live server extension or any other method to serve HTML files locally.

- Visual Studio Code (recommended)
- Live Server Extension (for VS Code)

# Header Position and Design Consideration

Initially, the header was set to position: fixed; to keep it at the top of the viewport while scrolling. However, this caused the logo to overlap with the banner due to the transparent background of the header, which impacted the design negatively.

## Solution

To avoid this issue, the position: fixed; was commented out in the CSS, allowing the header to scroll with the content naturally. This adjustment ensures that the logo remains within its designated space and does not interfere with the banner's appearance.

# Manual Testing

1. Open the Developer Tools in your browser (F12 or Ctrl+Shift+I).
2. Use the Console to manually run JavaScript functions and check the DOM elements.
3. Test Responsiveness by resizing the browser window or using the device toolbar in the developer tools (Ctrl+Shift+M).