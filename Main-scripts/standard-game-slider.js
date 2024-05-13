leftArrow = document.getElementById("standard-game-slider-arrow-left-n1");
rightArrow = document.getElementById("standard-game-slider-arrow-right-n1");

ulN1 = document.getElementById("standard-game-slider-ul-n1");

const w = window.innerWidth;
const h = window.innerHeight;

rightArrow.addEventListener("click", function() {
  if (window.innerWidth > 900) {
    ulN1.scrollLeft += (window.innerWidth * 0.74 + window.innerWidth * 0.74 * 0.025);
    console.log("over")
  }
  else {
    ulN1.scrollLeft += (window.innerWidth * 0.96 + window.innerWidth * 0.96 * 0.025);
    console.log("under")
  }
});

leftArrow.addEventListener("click", function() {
  if (window.innerWidth > 900) {
    ulN1.scrollLeft -= (window.innerWidth * 0.74 + window.innerWidth * 0.74 * 0.025);
  }
  else {
    ulN1.scrollLeft -= (window.innerWidth * 0.96 + window.innerWidth * 0.96 * 0.025);
  }
});