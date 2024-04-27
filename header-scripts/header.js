const headerLogoButton = document.getElementById('header-epicLogo-button');
const headerarrow = document.getElementById('header-epicLogo-arrow');
const headerLogoDropdown = document.getElementById('header-left-dropdown');

let arrowroated = false;
let deg = 0;

headerLogoButton.addEventListener('click', function(e) {

  deg = arrowroated ? 0 : 180;
  arrowroated = !arrowroated;
  headerarrow.style.transform = 'rotate(' + deg + 'deg)';
  headerLogoDropdown.style.display = arrowroated ? 'block' : 'none';
});

headerLogoButton.addEventListener('mouseout', () => {
  headerarrow.style.transform = 'translateY(0%) rotate(' + deg + 'deg)';
});

headerLogoButton.addEventListener('mouseover', () => {
  headerarrow.style.transform = 'translateY(20%) rotate(' + deg + 'deg)';
});

const headerReplacementButton = document.getElementById("header-replacement-button");
const headerReplacement = document.getElementById("main-replacement-menu-div");
const main = document.getElementById("main");
const footer = document.getElementById("footer");
const HeaderSticky = document.getElementById("Header-sticky");
const header = document.getElementById("header");

let headerReplacementButtonIsVisible = false;

headerReplacementButton.addEventListener("click", function(e) {
  if (!headerReplacementButtonIsVisible) {
    headerReplacement.style.display = "flex";
    main.style.display = "none";
    footer.style.display = "none";
    HeaderSticky.style.display = "none";
    header.style.backgroundColor = "rgb(18, 18, 18)";

    headerReplacementButtonIsVisible = true;
  }
  else {
    headerReplacement.style.display = "none";
    main.style.display = "block";
    footer.style.display = "block";
    HeaderSticky.style.display = "grid";
    header.style.backgroundColor = "#18181c";

    headerReplacementButtonIsVisible = false;
  }
});