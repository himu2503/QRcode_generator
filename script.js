// Create a new QRCode instance
let qrcode = new QRCode(document.querySelector(".qrcode"));

// Initial QR code generation with a default message
qrcode.makeCode("Why did you scan me?");

// Function to generate QR code based on user input
function generateQr() {
    const inputValue = document.querySelector("input").value.trim();
    
    if (inputValue === "") {
        alert("Input Field cannot be blank!");
    } else {
        qrcode.makeCode(inputValue);
    }
}

// Function to download the generated QR code as an image
function downloadQr() {
    const qrCanvas = document.querySelector(".qrcode canvas");

    if (qrCanvas) {
        const qrImageUrl = qrCanvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = qrImageUrl;
        link.download = "qrcode.png";  // Set default filename for the download
        link.click();  // Trigger the download
    } else {
        alert("QR Code is not generated yet!");
    }
}

// Event listener for the download button
document.querySelector("#downloadBtn").addEventListener("click", downloadQr);
