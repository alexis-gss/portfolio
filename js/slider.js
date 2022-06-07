var projects = document.querySelector(".projects");
var slideWrapper = document.querySelector(".slider-wrapper");
var sliderNav = document.querySelectorAll(".slider-id-wrapper svg");
var sliderPrev = document.querySelector(".slider-prev");
var sliderNext = document.querySelector(".slider-next");
var sliderIdActive = document.querySelector(".slider-id-active");
var sliderIdMax = document.querySelector(".slider-id-max");
var sliderItems = document.querySelectorAll(".slider-item");
var slideId = 0;
var slideTouchStartX, slideTouchStartY, slideTouchEndX, slideTouchEndY;

(function() {
  slideSetWidth();
  slideUpdateId();
  slideTouchEvent();
  sliderPrev.addEventListener("click", function () {slideVerify(-1);});
  sliderNext.addEventListener("click", function () {slideVerify(1);});
  window.onscroll = function () {
    var target = projects.getBoundingClientRect();
    if (target.top <= 400) {
      updateColorBackground(sliderItems[slideId].getAttribute("data-primary-color"), sliderItems[slideId].getAttribute("data-secondary-color"));
      if (target.top < -400) {
        updateColorBackground("var(--color2)", "var(--colorDefault)");
      }
    } else {
      updateColorBackground("var(--color2)", "var(--colorDefault)");
    }
  };
})();
function slideSetWidth() {
  slideWrapper.style.width = sliderItems.length + "00%";
}
function slideUpdateId() {
  sliderIdActive.textContent = "0" + (slideId + 1);
  sliderIdMax.textContent = "0" + sliderItems.length;
}
function slideVerify(n) {
  if (
    (n === -1 && slideId > 0) ||
    (n === 1 && slideId < sliderItems.length - 1)
  ) {
    slideTranslation(n);
    slideUpdateId();
    slideCheckNav();
    slideShowSlide();
    updateColorBackground(sliderItems[slideId].getAttribute("data-primary-color"), sliderItems[slideId].getAttribute("data-secondary-color"));
  }
}
function slideShowSlide() {
  sliderItems[slideId].classList.remove("slider-inactivated");
}
function slideTranslation(n) {
  slideId = slideId + n;
  for (let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].style.transform = "translateX(" + -slideId + "00%)";
  }
}
function slideCheckNav() {
  if (slideId === 0) sliderPrev.classList.add("slider-inactivated");
  else if (slideId === sliderItems.length - 1) {
    sliderNext.classList.add("slider-inactivated");
  } else {
    for (let i = 0; i < sliderNav.length; i++) {
      sliderNav[i].classList.remove("slider-inactivated");
    }
  }
}
function slideTouchEvent() {
  slideWrapper.addEventListener("touchstart", function (e) {
    slideTouchStartX = e.changedTouches[0].clientX;
    slideTouchStartY = e.changedTouches[0].clientY;
  });
  slideWrapper.addEventListener("touchend", function (e) {
    slideTouchEndX = e.changedTouches[0].clientX;
    slideTouchEndY = e.changedTouches[0].slideTouchEndY;
    if (slideTouchStartX < slideTouchEndX) {
      slideVerify(-1);
    } else if (slideTouchStartX > slideTouchEndX) {
      slideVerify(1);
    }
  });
}
function updateColorBackground(colorBackground, colorLines) {
  document.querySelector("body").style.background = colorBackground;
  document.documentElement.style.setProperty("--color4", colorLines);
}