//scrolling
const btnScrollTo = document.querySelector(".scroll--to");
const section1 = document.querySelector("#Our_Story");
const section2 = document.querySelector("#Our_Coffee");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();

  //Scrolling
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  });
});

//Page Navigation

document.querySelectorAll(".nav-link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});

////////////////////////////////////////////

//Slide in on scroll

//Capping number of times function is called
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

//Scrolling
const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  //Halfway through image
  sliderImages.forEach((sliderImage) => {
    const slideInAt = window.scrollY + window.innerHeight;
    -sliderImage.height / 2;
    //Bottom of Image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const notScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && notScrolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
