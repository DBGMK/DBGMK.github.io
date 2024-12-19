// Light/Dark Mode Toggle
const toggleTheme = document.getElementById('toggle-theme');
let isDarkMode = true;

toggleTheme.addEventListener('click', () => {
  document.body.style.background = isDarkMode
    ? 'linear-gradient(to right, #FFD700, #FFA500)'
    : 'linear-gradient(to right, #007BFF, #0047AB)';
  isDarkMode = !isDarkMode;
});

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
