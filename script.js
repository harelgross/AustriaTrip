const stops = {
  'firstSnow': 'קבלת פנים',
  'berchstesgaden': 'ברכטסגאדן',
  'hohenwerfen': 'טירת הוהנוורפן',
  'hallstatt': 'האלשטאט',
  'legoland': 'לגולנד',
  'upsideDownHouse': 'הבית ההפוך',
  'dinoWorld': 'עולם הדינוזאורים',
  'kitzsteinhorn': 'קיצשטיינהורן',
  'vienna': 'וינה'
}

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

let stopsContainer = document.querySelector('.stops');
Object.keys(stops).forEach(stop => {
  let stopNameHeb = stops[stop];
  let stopHtml = `
  <li>
    <div>
      <a href="#${stop}">
          <img src="images/stopsPics/${stop}.jpg" class="stopspic">
          <h4 class="stopstitle">${stopNameHeb}</h4>
      </a>
    </div>
  </li>`;
  stopsContainer.insertAdjacentHTML('beforeend', stopHtml);
});

let sections = document.querySelectorAll('section');
sections.forEach(section => setBackground(section));

function setBackground(section) {
  section.style.background = `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('images/backgrounds/${section.id}.jpg')`;
  section.style.backgroundRepeat = 'round';
}

let galleries = document.querySelectorAll('.gallery');

galleries.forEach(gallery => gallery.addEventListener('click', onGalleryImageClicked));

function onGalleryImageClicked(event) {
  let imageSrc = event.target.src;
  if (imageSrc) {
    let picDisplay = document.getElementById('pic-display');

    picDisplay.querySelector('.mainImage').src = imageSrc;

    picDisplay.style.display = 'block';

    picDisplay.querySelector('.mainImage').classList.remove('pic-portrait');
    picDisplay.querySelector('.mainImage').classList.remove('pic-landscape');
    picDisplay.querySelector('.mainImage').classList.remove('flipOnHover');

    if (event.target.naturalWidth > event.target.naturalHeight) {
      picDisplay.querySelector('.mainImage').classList.add('pic-landscape');
    }
    else {
      picDisplay.querySelector('.mainImage').classList.add('pic-portrait');
    }

    if (event.target.classList.contains('flipOnHover')) {
        picDisplay.querySelector('.mainImage').classList.add('flipOnHover');
    }
  }
}

document.getElementById("closeBtn").addEventListener('click', () => {document.getElementById('pic-display').style.display = 'none'});