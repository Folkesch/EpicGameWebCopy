const sliderUL = document.getElementById("img-Slider-ul");
const SclickArea = document.getElementById("img-Slider-rightSection");

const sImgSrcs = [
  "img/main/smallSlidePic/epic-savings1200x1600.avif",
  "img/main/smallSlidePic/witchfire.webp",
  "img/main/smallSlidePic/manor-lords.avif",
  "img/main/smallSlidePic/kingdom-come.avif",
  "img/main/smallSlidePic/genshin-impact1200x1600.avif",
  "img/main/smallSlidePic/epic-savings1200x1600.avif"
]; 

const bImgSrcs = [
  "img/main/bigSlidePic/epic-savings.avif",
  "img/main/bigSlidePic/witchfire1200x1600.avif",
  "img/main/bigSlidePic/manor-lords1200x1600.avif",
  "img/main/smallSlidePic/kingdom-come.avif",
  "img/main/bigSlidePic/genshin-impact1200x1600.avif",
  "img/main/bigSlidePic/epic-savings.avif"
];

const h5text = [
  "Epic Savings",
  "Manor Lords",
  "Witchfire",
  "Kingdom Come",
  "Genshin impact",
  "Epic Savings"
];

function getLI(i) {
  let tempLI = document.createElement("li");
  tempLI.className = "img-Slider-li";

  let tempPIC = document.createElement("picture");
  tempPIC.className = "img-Slider-li-picure";

  let tempSOR = document.createElement("source");
  tempSOR.media = "(max-width: 700px)";
  tempSOR.srcset = bImgSrcs[i];

  let tempIMG = document.createElement("img");
  tempIMG.className = "img-Slider-li-img";
  tempIMG.src = sImgSrcs[i];

  tempPIC.appendChild(tempSOR);
  tempPIC.appendChild(tempIMG);

  let tempH5 = document.createElement("h5");
  tempH5.textContent = h5text[i];
  tempH5.className = "img-Slider-li-p";

  tempLI.appendChild(tempPIC);
  tempLI.appendChild(tempH5);

  return tempLI;
}


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

document.addEventListener('visibilitychange', function(e) {
  var isPageActive = !document.hidden;

  if(!isPageActive){
    document.title = attentionMessage;
  }else {
    document.title = pageTitle;
  }
});

let ULcount = 0;


SclickArea.addEventListener("click", function(event) {
  if (event.target.tagName != "LI"){
    if (sliderUL.children.length < 500 && window.innerWidth > 700) {
      sliderUL.appendChild(getLI(ULcount % 5));
      ULcount++;
    }
  }
  else {
    sliderUL.removeChild(event.target);
  }
});