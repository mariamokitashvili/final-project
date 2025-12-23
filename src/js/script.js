//HERO SLIDER
let heroIndex = 0;
const heroSlides = document.querySelectorAll(".slide");

function changeHeroSlide() {
  heroSlides.forEach((slide) => slide.classList.remove("active"));
  heroIndex = (heroIndex + 1) % heroSlides.length;
  heroSlides[heroIndex].classList.add("active");
}

setInterval(changeHeroSlide, 5000);

// ABOUT SECTION ANIMATION

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll(".progress-filled");

          bars.forEach((bar) => {
            const targetWidth = bar.getAttribute("data-width") + "%";
            bar.style.width = targetWidth;

            setTimeout(() => bar.classList.add("animate"), 400);
          });

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  const aboutSection = document.querySelector("#about");
  if (aboutSection) observer.observe(aboutSection);
});
