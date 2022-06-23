localStorage.getItem("username");

function getName() {
  var name = localStorage.getItem("name");
  document.getElementById("user").innerHTML = name;
}
