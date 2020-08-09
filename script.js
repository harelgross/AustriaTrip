const stops = {
  'firstSnow': {name: 'קבלת פנים',
                markerPos: {x: 656,y: 443}},
  'berchstesgaden': {name: 'ברכטסגאדן',
                     markerPos: {x: 632,y: 485}},
  'hohenwerfen': {name: 'טירת הוהנוורפן'},
  'hallstatt': {name: 'האלשטאט',
                markerPos: {x: 738, y: 490}
               },
  'legoland': {name: 'לגולנד',
               markerPos:{ x:206, y: 298}
              },
  'upsideDownHouse': {name: 'הבית ההפוך',
                      markerPos:{ x:403, y: 563}},
  'dinoWorld': {name: 'עולם הדינוזאורים'},
  'kitzsteinhorn': {name: 'קיצשטיינהורן'},
  'schonbrunn': {name: 'ארמון שנברון'},
  'vienna': {name: 'וינה'}
}

const mapMarkerOffset = {
  x: 24,
  y: 64
}

window.addEventListener('scroll', () => {stickyNavbar();
                                         scrollFunction()});

//Get the button:
const mybutton = document.getElementById("myBtn");
mybutton.addEventListener('click', topFunction);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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
let mapContainer = document.querySelector('.mapContainer');
Object.keys(stops).forEach(stop => {
  let stopNameHeb = stops[stop].name.replace(' ', '<br>');
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

  let mapMarkerPos = stops[stop].markerPos;
  if (mapMarkerPos) {
      mapMarkerPos.x -= mapMarkerOffset.x;
      mapMarkerPos.y -= mapMarkerOffset.y;

      let mapMarkerHtml = `
      <div class="mapMarker" id="mapMarker-${stop}">
        <a href="#${stop}">
          <img src="images/mapMarker.png">
          <img src="images/stopsPics/${stop}.jpg" class="mapMarkerPic">
          <p class="mapMarkerTitle">${stops[stop].name}</p>
        </a>
      </div>
      `;

      mapContainer.insertAdjacentHTML('beforeend', mapMarkerHtml);
      document.getElementById(`mapMarker-${stop}`).style.left = mapMarkerPos.x;
      document.getElementById(`mapMarker-${stop}`).style.top = mapMarkerPos.y;

  }
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


