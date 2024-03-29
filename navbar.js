const hamburgerIcon = document.getElementById("hamburger-icon-container-id");
const navId = document.getElementById("navId");

function hamburgerAnimation() {
  navId.classList.toggle("active");
  for (i = 0; i < 4; i++) {
    hamburgerIcon.children[i].classList.toggle("toggle-" + i);
  }
}

hamburgerIcon.addEventListener("click", hamburgerAnimation);

function hideMenu() {
  navId.classList.remove("active");
  for (i = 0; i < 4; i++) {
    hamburgerIcon.children[i].classList.remove("toggle-" + i);
  }
}
