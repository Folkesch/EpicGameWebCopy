leftArrow = document.getElementById("standard-game-slider-arrow-left-n1");
rightArrow = document.getElementById("standard-game-slider-arrow-right-n1");

ulN1 = document.getElementById("standard-game-slider-ul-n1");

const w = window.innerWidth;
const h = window.innerHeight;

rightArrow.addEventListener("click", function() {
  ulN1.scrollLeft += (w * 0.74 + w * 0.74 * 0.025);
});

leftArrow.addEventListener("click", function() {
  ulN1.scrollLeft -= (w * 0.74 + w * 0.74 * 0.025);
});