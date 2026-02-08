// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


// banner Slider
const slides = document.querySelectorAll("#slider img");
let index = 0;

setInterval(() => {
  slides[index].classList.replace("opacity-100", "opacity-0");
  index = (index + 1) % slides.length;
  slides[index].classList.replace("opacity-0", "opacity-100");
}, 4000);





//slider part
window.onload = function () {

  const slider = document.getElementById("reviewSlider");
  const cards = slider.children;
  let currentIndex = 1;
  let sliderInterval;

  function cardWidth() {
    return cards[0].offsetWidth;
  }

  function setPosition() {
    slider.style.transition = "none";
    slider.style.transform =
      `translateX(-${cardWidth() * currentIndex}px)`;
  }

  function autoSlide() {
    currentIndex++;
    slider.style.transition = "transform 0.7s ease-in-out";
    slider.style.transform =
      `translateX(-${cardWidth() * currentIndex}px)`;
  }

  slider.addEventListener("transitionend", () => {
    if (currentIndex >= cards.length - 1) {
      currentIndex = 1;
      setPosition();
    }
  });

  function startSlider() {
    sliderInterval = setInterval(autoSlide, 1500);
  }

  function stopSlider() {
    clearInterval(sliderInterval);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopSlider();
    } else {
      setPosition();
      startSlider();
    }
  });

  window.addEventListener("resize", setPosition);

  setPosition();
  startSlider();
};



//Animate part
const slider = document.getElementById("imgSlider");

slider.innerHTML += slider.innerHTML;

let x = 0;
const speed = 2;

function animate() {
  x -= speed;
  slider.style.transform = `translateX(${x}px)`;

  if (Math.abs(x) >= slider.scrollWidth / 2) {
    x = 0;
  }

  requestAnimationFrame(animate);
}
animate();






// storySlider
const storySlider = document.getElementById("storySlider");
const slidesTotal = storySlider.children.length;
let activeStory = 0;

storySlider.style.transition = "none";
storySlider.style.transform = "translateX(0%)";

function moveStory() {
  storySlider.style.transition = "transform 0.6s ease-in-out";
  storySlider.style.transform =
    `translateX(-${activeStory * 100}%)`;
}

document.getElementById("storyNext").onclick = () => {
  activeStory = (activeStory + 1) % slidesTotal;
  moveStory();
};

document.getElementById("storyPrev").onclick = () => {
  activeStory = (activeStory - 1 + slidesTotal) % slidesTotal;
  moveStory();
};




