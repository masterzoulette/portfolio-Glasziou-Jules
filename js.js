var overlay = document.getElementById("overlay");
var burger = document.getElementById("burger");
var on = "true";

burger.addEventListener("click", openMoadl);

function openMoadl() {
  if (on == "true") {
    overlay.style.display = "block";
    on = "false";
  } else {
    overlay.style.display = "none";
    on = "true";
  }
}
