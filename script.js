document.addEventListener("DOMContentLoaded", function () {
    // Monthly prices and Annual prices
    const monthlyPrices = ['$19.99', '$24.99', '$39.99'];
    const annualPrices = ['$199.99', '$249.99', '$399.99'];
  
    // Get references to the pricing elements and the toggle
    const priceElements = document.querySelectorAll('.price');
    const toggle = document.getElementById('toggle');
  
    // Set the default price to monthly and set the aria-checked to 'false' (for monthly)
    setPricing(monthlyPrices);
    toggle.classList.remove('active');  // Make sure toggle starts on the "monthly" side
    toggle.setAttribute('aria-checked', 'false');  // Reflect the default state
  
    // Toggle switch functionality
    toggle.addEventListener('click', function () {
      // Toggle the active class for visual changes (optional)
      toggle.classList.toggle('active');
  
      // Toggle the aria-checked attribute to reflect the current state
      if (toggle.classList.contains('active')) {
        toggle.setAttribute('aria-checked', 'true');
        setPricing(annualPrices);
      } else {
        toggle.setAttribute('aria-checked', 'false');
        setPricing(monthlyPrices);
      }
    });
  
    // Function to update the pricing
    function setPricing(prices) {
      // Update the prices in each card
      priceElements.forEach((element, index) => {
        element.textContent = prices[index];
      });
    }
  });
  