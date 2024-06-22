

const imageContainer = document.querySelector('.image-container');

// Function to scroll the image container
function scrollImages() {
  imageContainer.scrollBy({
    left: imageContainer.offsetWidth, // Scroll by the width of the container
    behavior: 'smooth' // Make the scrolling smooth
  });
  // Reset the scroll position after it reaches the end
  if (imageContainer.scrollLeft >= imageContainer.scrollWidth - imageContainer.offsetWidth) {
    imageContainer.scrollLeft = 1;
  }
}

// Call the scroll function after 5 seconds
setTimeout(scrollImages, 5000);
// Call the scroll function repeatedly after 5 seconds
setInterval(scrollImages, 5000);


// reponsive button script 
function performSearch(query) {
  fetch(`your-api-endpoint?q=${query}`)
      .then(response => response.json())
      .then(data => {
          displayResults(data.results);
      })
      .catch(error => console.error('Error:', error));
}

document.getElementById('search-button').addEventListener('click', function() {
  let query = document.getElementById('search-input').value;
  performSearch(query);
});


