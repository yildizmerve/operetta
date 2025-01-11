const images = document.querySelectorAll(".slider-container img");
const about = document.querySelector(".about");
const logoContainer = document.querySelector(".logo-container");
const amentiesContainer = document.querySelector(".page.amenities");
const detailPages = document.querySelectorAll(".page.detail");

let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  about.classList.add("active");
  logoContainer.classList.add("active");

  setInterval(() => {
    images[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + 1) % images.length;

    images[currentIndex].classList.add("active");
  }, 3000);
});

document.addEventListener("scroll", () => {
  let amentiesTopSide = amentiesContainer.getBoundingClientRect().top;

  if (amentiesTopSide <= window.innerHeight) {
    amentiesContainer.classList.add("active");
  }

  detailPages.forEach((page) => {
    let pageTop = page.getBoundingClientRect().top;
    let pageHeight = page.offsetHeight;

    // Sayfa tam görünür olduğunda animasyonları başlat
    if (pageTop <= window.innerHeight && pageTop + pageHeight >= 0) {
      if (!page.classList.contains("active")) {
        page.classList.add("active");
      }
    }
  });
});
