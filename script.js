// Hide the no-JavaScript message if JavaScript is enabled
document.getElementById('no-js-message').style.display = 'none';

// Function to generate a random number
document.getElementById('generateButton').addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    // Clear previous error messages
    document.getElementById('error').textContent = '';
    document.getElementById('result').textContent = '';

    if (isNaN(min) || isNaN(max)) {
        document.getElementById('error').textContent = 'Error: Please enter valid numbers.';
        return;
    }

    if (min >= max) {
        document.getElementById('error').textContent = 'Error: Maximum number must be greater than minimum.';
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').textContent = `${randomNumber}`;
});
