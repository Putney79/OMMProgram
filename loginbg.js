// Store the path of the images in an array
var backgrounds = ["bg0.png", "bg6.png"];
window.onload = function() {
  // Get a random index
  var index = Math.floor(Math.random() * backgrounds.length);
  // Modify the background image of the body 
  document.body.style.background = "url('" + backgrounds[index] + "')";
  // These css stylings are to make sure the image fits the page correctly
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
};

let user1 = {
  username: 'admin',
  password: 'password'
}

const verifyLogin = (event) => {
  event.preventDefault()
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value
  if(username === user1.username && password === user1.password) {
    window.location.href = "/admin.html"
  } else {
    alert("incorrect details.")
  }
}

document.getElementById('submit-login').addEventListener('click', verifyLogin)