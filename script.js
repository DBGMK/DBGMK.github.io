// Light/Dark Mode Toggle
const toggleTheme = document.getElementById('toggle-theme');
let isDarkMode = true;

toggleTheme.addEventListener('click', () => {
  document.body.style.background = isDarkMode
    ? 'linear-gradient(to right, #FFD700, #FFA500)'
    : 'linear-gradient(to right, #007BFF, #0047AB)';
  isDarkMode = !isDarkMode;
});

// Handle partnership form submission
document.addEventListener("DOMContentLoaded", function () {
  const partnershipForm = document.querySelector("#partnership-form");

  if (partnershipForm) {
    partnershipForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const message = document.querySelector("#message").value;

      // Retrieve existing applications from Local Storage
      const existingApplications = JSON.parse(localStorage.getItem("partnershipApplications")) || [];

      // Add new application
      const newApplication = { name, email, message, date: new Date().toISOString() };
      existingApplications.push(newApplication);

      // Save back to Local Storage
      localStorage.setItem("partnershipApplications", JSON.stringify(existingApplications));

      // Clear the form
      partnershipForm.reset();

      // Display confirmation
      const responseMessage = document.querySelector("#form-response");
      responseMessage.textContent = "Thank you for applying for a partnership! We will get back to you soon.";
    });
  }
});

  // Show a success message
  const responseElement = document.getElementById('form-response');
  responseElement.style.display = 'block';
  responseElement.textContent = 'Thank you for applying! We will get back to you soon.';
  
  // Clear the form
  document.getElementById('partnership-form').reset();
});



// Clear
function clearAllMessages() {
  if (confirm("Are you sure you want to clear all messages? This action cannot be undone.")) {
    // Clear messages from localStorage
    localStorage.removeItem('feedback');
    // Update the feedback container to show "No feedback available"
    document.getElementById('feedback-container').innerHTML = "<p>No feedback available.</p>";
    alert("All messages have been cleared!");
  }
}

// Particle Background Animation
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const colors = ['#00D9FF', '#FFD700', '#00FFAB', '#FF5733'];

class Particle {
  constructor(x, y, size, color, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > 0.2) this.size -= 0.05;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  for (let i = 0; i < 100; i++) {
    const size = Math.random() * 5 + 1;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const speedX = Math.random() * 2 - 1;
    const speedY = Math.random() * 2 - 1;

    particlesArray.push(new Particle(x, y, size, color, speedX, speedY));
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach((particle, index) => {
    particle.update();
    particle.draw();

    if (particle.size <= 0.2) particlesArray.splice(index, 1);
  });

  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();
