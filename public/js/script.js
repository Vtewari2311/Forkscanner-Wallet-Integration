// Define a function to handle the form submission
function handleSubmit(event) {
    event.preventDefault();
  
    // Get the input field values
    const nodeUrl = document.getElementById('node-url').value;
    const walletAddress = document.getElementById('wallet-address').value;
  
    // Make an API call to submit the form data
    fetch('/submit-form', {
      method: 'POST',
      body: JSON.stringify({ nodeUrl, walletAddress }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      // Display the response data
      const resultElement = document.getElementById('form-result');
      resultElement.innerHTML = `Submitted data: ${JSON.stringify(data)}`;
    })
    .catch(error => {
      // Display the error message
      const resultElement = document.getElementById('form-result');
      resultElement.innerHTML = `Error: ${error.message}`;
    });
  }
  
  // Add a click event listener to the submit button
  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', handleSubmit);
  