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

//TESTIMONIAL SLIDER
const testimonialSlides = [
  {
    img: "https://picsum.photos/200?random=20",
    name: "გიორგი",
    profession: "UI/UX designer",
    text: "Smart Academy-ში სასწავლო პროგრამა კარგად არის დალაგებული — თითოეული თემა ლოგიკურად მიჰყვება ერთმანეთს და მასალას ადვილად ეწევი. ახალ სფეროში გადასასვლელად ნამდვილად გამოსადეგი სტარტია.",
  },
  {
    img: "https://picsum.photos/200?random=25",
    name: "ნანუკა",
    profession: "ვიდეო კონტენტის შექმნა",
    text: "ჯგუფური ფორმატი ძალიან კომფორტულია. ვინაიდან ჯგუფები პატარაა, ლექტორები ყველა სტუდენტს ინდივიდუალურად უდგებიან.",
  },
  {
    img: "https://picsum.photos/200?random=45",
    name: "ლაშა",
    profession: "PR, EVENT BRANDING & MANAGEMENT",
    text: "მომეწონა, რომ თეორიასთან ერთად პრაქტიკულ დავალებებსაც დიდი მნიშვნელობა აქვს. ბევრს მუშაობ მაგალითებზე და საბოლოოდ პრაქტიკასთან ერთად ცოდნა უკეთ გამახსოვრდება",
  },
  {
    img: "https://picsum.photos/200?random=40",
    name: "თამუნა",
    profession: "FRONT-END DEVELOPMENT",
    text: "აკადემიის გუნდი ყოველთვის სწრაფად პასუხობს ტექნიკურ თუ ორგანიზაციულ კითხვებზე. პროცესში მხარდაჭერა იგრძნობა და სასწავლო ეტაპი მარტივად მიმდინარეობს.",
  },
];

let testimonialIndex = 0;

const img = document.getElementById("slide-img");
const nameEl = document.getElementById("slide-name");
const professionEl = document.getElementById("slide-profession");
const textEl = document.getElementById("slide-text");

const dots = document.querySelectorAll(".dot");

function showTestimonialSlide(i) {
  testimonialIndex = i;
  const s = testimonialSlides[i];

  img.src = s.img;
  nameEl.textContent = s.name;
  professionEl.textContent = s.profession;
  textEl.textContent = s.text;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[i].classList.add("active");
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showTestimonialSlide(Number(dot.dataset.index));
  });
});

showTestimonialSlide(0);
