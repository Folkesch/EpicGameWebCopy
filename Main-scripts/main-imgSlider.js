const sliderUL = document.getElementById("img-Slider-ul");
const SclickArea = document.getElementById("img-Slider-rightSection");

var pageTitle = document.title;
var attentionMessage = 'Come Back!';

window.addEventListener("load", function() {
  if (window.innerWidth < 700) {
    imgs = document.getElementsByClassName("img-Slider-li-img");

    for (var i = 0; i < imgs.length; i++) {
      imgs.item(i).src = "img/main/en-epic-savings-april-carousel-mobile-10b6385734ea.avif";
    }
  }
});

window.addEventListener("resize", function() {
  if (window.innerWidth < 700) {
    imgs = document.getElementsByClassName("img-Slider-li-img");

    for (var i = 0; i < imgs.length; i++) {
      imgs.item(i).src = "img/main/en-epic-savings-april-carousel-mobile-10b6385734ea.avif";
    }
  }
  else {
    imgs = document.getElementsByClassName("img-Slider-li-img");

    for (var i = 0; i < imgs.length; i++) {
      imgs.item(i).src = "img/main/en-epic-savings-april-carousel-thumbnail-1200x1600-6df4d517f365.avif";
    }
  }
})

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

  if (event.target.tagName != "LI"){
    if (sliderUL.children.length < 6 && window.innerWidth < 700) {

      tempIMG = document.createElement("img");
      tempIMG.className = "img-Slider-li-img";
      tempIMG.src = "img/main/en-epic-savings-april-carousel-thumbnail-1200x1600-6df4d517f365.avif";

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
  }
  else {
    sliderUL.removeChild(event.target);
  }
});


const container = document.querySelector('#img-Slider-ul');
                
let startY;
let startX;
let scrollLeft;
let scrollTop;
let isDown;

container.addEventListener('mousedown',e => mouseIsDown(e));  
container.addEventListener('mouseup',e => mouseUp(e))
container.addEventListener('mouseleave',e=>mouseLeave(e));
container.addEventListener('mousemove',e=>mouseMove(e));

function mouseIsDown(e){
  isDown = true;
  startY = e.pageY - container.offsetTop;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
  scrollTop = container.scrollTop; 
}
function mouseUp(e){
  isDown = false;
}
function mouseLeave(e){
  isDown = false;
}
function mouseMove(e){
  if(isDown){
    e.preventDefault();
    //Move vertcally
    const y = e.pageY - container.offsetTop;
    const walkY = y - startY;
    container.scrollTop = scrollTop - walkY;

    //Move Horizontally
    const x = e.pageX - container.offsetLeft;
    const walkX = x - startX;
    container.scrollLeft = scrollLeft - walkX;

  }
}