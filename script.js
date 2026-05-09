// Simple scroll animation for sections and cards

const animatedElements = document.querySelectorAll(".section, .project-card");

animatedElements.forEach((element) => {
  element.classList.add("hidden");
});

function showOnScroll() {
  animatedElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (elementTop < screenHeight - 100) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();