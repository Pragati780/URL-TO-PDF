// background.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'convertToPDF') {
    const url = message.url;

    // Use jsPDF library to generate a PDF
    const { jsPDF } = window.jspdf; // If you're using jsPDF from a CDN

    const doc = new jsPDF();
    doc.text("PDF Generated from URL: " + url, 10, 10);
    // You can add more content based on the URL (like fetching content from the URL)

    // Save or download the PDF
    doc.save('generated.pdf'); // This will download the PDF to the user's default download location

    sendResponse({ status: "success" });
  }
});