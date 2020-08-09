window.addEventListener('scroll', stickyNavbar);

// Get the navbar
var navbar = document.getElementById("navbar");
var main = document.querySelector("main");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    main.classList.add("mainPadding");
  } 
  else {
    navbar.classList.remove("sticky");
    main.classList.remove("mainPadding");

  }
}

let galleries = document.querySelectorAll('.gallery');

galleries.forEach(gallery => gallery.addEventListener('click', onGalleryImageClicked));

function onGalleryImageClicked(event) {
  let imageSrc = event.target.src;

  let picDisplay = document.getElementById('pic-display');
  picDisplay.querySelector('img').src = imageSrc;

  picDisplay.style.display = 'block';

  picDisplay.querySelector('img').classList.remove('pic-portrait');
  picDisplay.querySelector('img').classList.remove('pic-landscape');

  if (event.target.naturalWidth > event.target.naturalHeight) {
    picDisplay.querySelector('img').classList.add('pic-landscape');
  }
  else {
    picDisplay.querySelector('img').classList.add('pic-portrait');
  }
}

document.getElementById("closeBtn").addEventListener('click', function() {document.getElementById('pic-display').style.display = 'none';});