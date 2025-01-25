document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("convertBtn").addEventListener("click", () => {
    const url = document.getElementById("urlInput").value;
    
    chrome.runtime.sendMessage({ action: "convertToPDF", url: url }, (response) => {
      if (response.status === "success") {
        alert("PDF is being generated!");
      } else {
        alert("There was an error generating the PDF.");
      }
    });
  });
});
