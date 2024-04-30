// Get references to the counter paragraph and increment button
    const counterElement = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementBtn');

    // Add click event listener to the increment button
    incrementButton.addEventListener('click', function() {
      // Get the current value of the counter
      let currentValue = parseInt(counterElement.textContent);
      
      // Display an alert with the un-incremented value
      alert('Un-incremented value: ' + currentValue);
      
      // Increment the counter value
      currentValue++;
      
      // Update the counter paragraph with the new value
      counterElement.textContent = currentValue;
    });
