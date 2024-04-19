headerLogoButton = document.getElementById('header-epicLogo-button');
headerarrow = document.getElementById('header-epicLogo-arrow');
headerLogoDropdown = document.getElementById('header-left-dropdown');

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