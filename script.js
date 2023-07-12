// Add event listener to the registration form
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Perform registration logic here
  
    // Redirect to the dashboard page
    window.location.href = "dashboard.html";
  });
  