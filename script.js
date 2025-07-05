const qrcode = new QRCode(document.getElementById("qrcode"));

// Default QR
qrcode.makeCode("Why did you scan me?");

// Generate QR
function generateQr() {
  const inputValue = document.getElementById("qrInput").value.trim();
  if (inputValue === "") {
    alert("Input cannot be empty!");
    return;
  }
  qrcode.makeCode(inputValue);
}

// Generate on Enter key
function handleEnter(e) {
  if (e.key === "Enter") {
    generateQr();
  }
}

// Download QR
function downloadQr() {
  const canvas = document.querySelector(".qrcode canvas");
  if (canvas) {
    const imageURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "qrcode.png";
    link.click();
  } else {
    alert("Please generate a QR code first.");
  }
}

document.getElementById("downloadBtn").addEventListener("click", downloadQr);
