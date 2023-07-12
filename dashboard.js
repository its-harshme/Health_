// Function to fetch registration data from the server
function fetchRegistrationData() {
    // Make an API request to retrieve the registration data
    fetch('/registration-data')
      .then(response => response.json())
      .then(data => {
        // Update profile section with registration data
        document.getElementById('profile-name').textContent = data.name;
        document.getElementById('profile-email').textContent = data.email;
        document.getElementById('profile-phone').textContent = data.phone;
        document.getElementById('profile-address').textContent = data.address;
      })
      .catch(error => {
        console.error('Error fetching registration data:', error);
      });
  }
  
  // Call the fetchRegistrationData function to populate the dashboard with registration data
  fetchRegistrationData();

  
  // Retrieve user data from registration form
const name = localStorage.getItem("name");

// Update the doctor name in the appointments section
document.getElementById("doctor-name").textContent = name;
