let homeBtn = document.getElementById("homeBtn");

let homeBtnIcon = document.getElementById("homeBtn__icon");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 800) {
    homeBtn.style.visibility = "visible";
    homeBtn.style.opacity = "1";
    homeBtnIcon.style.transform = "rotate(-90deg)";
  } else {
    homeBtn.style.visibility = "hidden";
    homeBtn.style.opacity = "0";
    homeBtnIcon.style.transform = "rotate(0deg)";
  }
}
