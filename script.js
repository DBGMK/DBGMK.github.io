// Smooth Scrolling Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Additional Interactive Animations
const cards = document.querySelectorAll(".service-card");
cards.forEach((card, index) => {
  setTimeout(() => {
    card.style.opacity = "1";
  }, index * 200);
});
