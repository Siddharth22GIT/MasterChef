document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const recipe = document.getElementById('recipe').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;

    // Create a review object
    const reviewData = {
        name,
        recipe,
        rating,
        review,
    };

    // Display the review
    displayReview(reviewData);

    // Clear the form
    this.reset();
});

// Function to display the review
function displayReview(reviewData) {
    const reviewsContainer = document.getElementById('reviewsContainer');

    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';
    reviewCard.innerHTML = `
        <h3>${reviewData.name} (Rating: ${reviewData.rating})</h3>
        <p><strong>Recipe:</strong> ${reviewData.recipe}</p>
        <p>${reviewData.review}</p>
    `;

    reviewsContainer.appendChild(reviewCard);
}
