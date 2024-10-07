document.getElementById('copyButton').addEventListener('click', () => {
  const imageUrl = document.getElementById('imageUrl').value;

  if (!imageUrl) {
    document.getElementById('statusMessage').textContent = 'Please enter a valid image URL.';
    return;
  }

  // Copy image to clipboard using the library
  CopyImageClipboard.copyImageToClipboard(imageUrl)
    .then(() => {
      document.getElementById('statusMessage').textContent = 'Image copied to clipboard!';
    })
    .catch((error) => {
      document.getElementById('statusMessage').textContent = 'Error: ' + error.message;
    });
});
