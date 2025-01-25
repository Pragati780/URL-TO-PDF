# URL-TO-PDF

Here's a sample README.md file for your Chrome extension project that uses jsPDF and a build process with npm.

---

# Chrome Extension

A Chrome extension to convert webpage content into a downloadable PDF using the `jsPDF` library.

## Features
- Convert webpage content into a PDF.
- Uses the `jsPDF` library for PDF generation.
- Built with npm.

## Process Overview

- **Clone the Repository**
  - Clone the repository to your local machine.

- **Install Dependencies**
  - Run `npm install` to install required libraries like `jsPDF`.

- **Load the Extension in Chrome**
  - Go to `chrome://extensions/`.
  - Enable "Developer Mode".
  - Click "Load unpacked" and select the `dist` folder containing the bundled files.

- **Usage**
  - Send a message to the background script to trigger the PDF generation from the URL.

- **Debugging & Development**
  - Use Chrome’s Developer Tools to inspect and debug the extension during development.

- **License**
  - Licensed under the MIT License.

---

The extension listens for specific messages and performs actions when triggered (in this case, generating PDFs). Once installed, you can trigger the PDF generation by sending a message to the extension with the URL of the page you want to convert to a PDF.


