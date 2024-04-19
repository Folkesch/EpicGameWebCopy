const sliderUL = document.getElementById("img-Slider-ul");
const SclickArea = document.getElementById("img-Slider-rightSection");

var pageTitle = document.title;
var attentionMessage = 'Come Back!';

document.addEventListener('visibilitychange', function(e) {
  var isPageActive = !document.hidden;

  if(!isPageActive){
    document.title = attentionMessage;
  }else {
    document.title = pageTitle;
  }
});

let ULcount = 1;

SclickArea.addEventListener("click", function(event) {

  if (event.target.tagName != "LI"/* && event.target.className != "img-Slider-li-p" && event.target.className != "img-Slider-li-img"*/){
    if (sliderUL.children.length < 6) {

      tempIMG = document.createElement("img");
      tempIMG.className = "img-Slider-li-img";
      tempIMG.src = "https://cdn2.unrealengine.com/en-epic-savings-april-carousel-thumbnail-1200x1600-6df4d517f365.jpg?h=128&quality=medium&resize=1&w=96";

      tempH5 = document.createElement("h5");
      tempH5.className = "img-Slider-li-p";
      tempH5.textContent = "Epic Savings " + ULcount.toString();
      ULcount += 1;

      tempLI = document.createElement("li");
      tempLI.className = "img-Slider-li";
      tempLI.appendChild(tempIMG);
      tempLI.appendChild(tempH5);

      sliderUL.appendChild(tempLI);
    }
    return;
  }
  else {
    sliderUL.removeChild(event.target);
  }
});

