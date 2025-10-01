const users = [];

const form = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');
const searchInput = document.getElementById('search');

form.addEventListener('submit', getUserInfo);

// This function only runs when the form is submitted
function getUserInfo(event){
  event.preventDefault(); // Prevents the page from getting reloaded by the submit call
  // First task: assign the proper values to these variables
  let name = form.querySelector ('#name').value;
  let email = form.querySelector('#email').value;
  let age = form.querySelector('#age').value;
  validateForm(name, email, age)
}

searchInput.addEventListener('input', function() {

});


function renderUsers(filteredUsers = users) {

}

function validateForm(name, email, age) {
  // Validate email
  if (!(email.includes('@') &&
      email.includes('.'))) {
        alert("Incorrect email format")
  }
  if (!(email.length > 0 &&
      email.length <= 120)) {
        alert("Email must be between 1 and 120")
      }
      console.log(email.length);
}

function clearForm() {

}

function editUser(index) {

}
