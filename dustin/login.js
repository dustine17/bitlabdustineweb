localStorage.setItem("username", value);

function setName() {
  window.location.href = "profile.html";
  var name = document.getElementById("mail").value;
  localStorage.setItem("name", name);
}
