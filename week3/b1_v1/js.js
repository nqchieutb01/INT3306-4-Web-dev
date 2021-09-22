const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  const wa = document.getElementById("wa") ;
  wa.textContent = "";
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  const wa = document.getElementById("wa") ;
  wa.textContent = "";
	container.classList.remove("right-panel-active");
});

function myFunction() {
  document.getElementById("wa").textContent = "Tên đăng nhập hoặc mật khẩu không đúng" ;
  document.getElementById("wa").style.fontSize = "10px"; 
  document.getElementById("wa").style.color = "red";
}
function showMessage(text, time) {
  var o = document.getElementById("tempMessage");
  o.style.display = "block";
  o.innerHTML = text;
  setTimeout(function() {
       o.style.display = "none";
  }, time);
}

function msg() {
  showMessage("Tên đăng nhập hoặc mật khẩu không đúng.", 3000);
}

function showMessage(text, time) {
  var o = document.getElementById("wa");
  o.style.display = "block";
  o.style.fontSize = "14px" ;
  o.style.color = "red";
  o.innerHTML = text;
  setTimeout(function() {
       o.style.display = "none";
  }, time);
}