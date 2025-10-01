let users = [];

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
  let id = form.querySelector('#id').value;
  validateForm(name, email, age, id)
  clearForm()
}

searchInput.addEventListener('input', function() {
});


function renderUsers(filteredUsers = users) {
    const userList = document.querySelector('#user-list');
    userList.innerHTML = "";

    // Create list element
    const listElement = document.createElement("ul");
    userList.appendChild(listElement);
    let temp = "";

    users = sortUsers(users);

    for(let i = 0; i < users.length; i++) {
      temp += `<li>
              <p class="userId" style="visibility: hidden">${users[i]["id"]}</p>
              <p class="userEmail">${users[i]["email"]}</p>
              <p class="userName">${users[i]["name"]}</p>
              <p class="userAge">${users[i]["age"]}</p>
              <button class='remove-btn'>Remove</button><button class='edit-btn'>Edit</button></li>`;
    }

    listElement.innerHTML = temp;
    let removeBtns = document.querySelectorAll(".remove-btn")
    let editBtns = document.querySelectorAll(".edit-btn")
    for(let i = 0; i < removeBtns.length; i++) {
      removeBtns[i].addEventListener('click', function(event) {
        removeUser(event)
      })
      editBtns[i].addEventListener('click', function(event) {
        editUser(event)
      })
    }
}

function removeUser(event) {
    if(confirm('Are you sure you want to delete this user?')) {
      event.target.parentElement.remove();
    }
}

function editUser(event) {
  const user = event.target.parentElement;
  let userId = user.querySelector(".userId").innerHTML;
  let userEmail = user.querySelector(".userEmail").innerHTML;
  let userName = user.querySelector(".userName").innerHTML;
  let userAge = user.querySelector(".userAge").innerHTML;
  
  const form = document.querySelector('#signup-form');
  form.querySelector('#id').value = userId;
  form.querySelector('#name').value = userName;
  form.querySelector('#email').value = userEmail;
  form.querySelector('#age').value = userAge;
}

function sortUsers(users) {
  return users.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
}

function validateForm(name, email, age, id) {
  // Validate email
  if (!(email.includes('@') &&
      email.includes('.'))) {
        alert("Incorrect email format")
        return;
  }
  if (!(email.length > 0 &&
      email.length <= 120)) {
        alert("Email must be between 1 and 120")
        return;
      }
  else {
    // New User or Edit?
    if(id == '') {
      let user = {
        id: Date.now(),
        name: name,
        email: email,
        age: age
      };
      users.push(user);
      renderUsers();
    } else {
      let user = {
        id: id,
        name: name,
        email: email,
        age: age
      }
      let indexOfUser = users.findIndex(user => user.id == id);
      users[indexOfUser] = user;
      renderUsers();
    }
  }
}

function clearForm() {
    const form = document.querySelector('#signup-form');
    form.querySelector('#name').value = '';
    form.querySelector('#email').value = '';
    form.querySelector('#age').value = '';
    form.querySelector('#id').value = '';
}
