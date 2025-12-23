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

//MY PROJECTS (FILTER)
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    cards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "all" || filter === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
