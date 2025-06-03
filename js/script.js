fetch('sidebar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('sidebar-container').innerHTML = data;
});

//---------------------------- start animation
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

// --------------------- back to the top
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

// --------------------- image gallery modal
let currentIndex = 0;
let images = [];

function openLightbox(index) {
  images = Array.from(document.querySelectorAll(".gallery-img"));
  currentIndex = index;
  updateLightbox();
  document.getElementById("lightbox").classList.remove("hidden");

  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  document.getElementById("lightbox").classList.add("hidden");
  document.body.classList.remove("no-scroll");
}

function changeImage(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  updateLightbox();
}

function updateLightbox() {
  const img = images[currentIndex];
  document.querySelector(".lightbox-img").src = img.src;
  document.querySelector(".lightbox-img").alt = img.alt;
}

document.querySelectorAll(".gallery-img").forEach((img, index) => {
  img.addEventListener("click", () => openLightbox(index));
});


window.onload = () => {
  const grid = document.querySelector('.gallery-grid');
  const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('gap'));

  grid.querySelectorAll('.gallery-img').forEach(img => {
    const imgHeight = img.getBoundingClientRect().height;
    const rowSpan = Math.ceil((imgHeight + rowGap) / (rowHeight + rowGap));
    img.style.setProperty('--row-span', rowSpan);
  });
};


function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const button = document.getElementById('menuButton');
  const isOpen = menu.classList.contains('show');

  if (isOpen) {
    menu.classList.remove('show');
    button.textContent = 'Menu';
  } else {
    menu.classList.add('show');
    button.textContent = 'Close';
  }
}


