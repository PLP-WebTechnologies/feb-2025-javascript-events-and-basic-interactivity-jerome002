// Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
  alert('Button was clicked!');
});

document.getElementById('hoverBox').addEventListener('mouseover', () => {
  document.getElementById('hoverBox').style.backgroundColor = '#cfc';
});
document.getElementById('hoverBox').addEventListener('mouseout', () => {
  document.getElementById('hoverBox').style.backgroundColor = '#ffd';
});

document.getElementById('keyInput').addEventListener('keypress', (e) => {
  console.log(`You pressed: ${e.key}`);
});

// Bonus: double-click or long-press
let timer;
const secretBtn = document.getElementById('secretBtn');

secretBtn.addEventListener('dblclick', () => {
  alert('Double-click detected!');
});

secretBtn.addEventListener('mousedown', () => {
  timer = setTimeout(() => {
    alert('Long press detected!');
  }, 1000);
});

secretBtn.addEventListener('mouseup', () => clearTimeout(timer));

// Interactive Elements
document.getElementById('colorChanger').addEventListener('click', function () {
  this.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});

const images = [
  'https://source.unsplash.com/random/200x200?sig=1',
  'https://source.unsplash.com/random/200x200?sig=2',
  'https://source.unsplash.com/random/200x200?sig=3'
];

let currentImage = 0;
document.getElementById('nextImg').addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById('galleryImg').src = images[currentImage];
});

// Tabs
document.querySelectorAll('.tab').forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    document.querySelectorAll('.tab-content').forEach(div => div.classList.add('hidden'));
    document.getElementById(tabId).classList.remove('hidden');
  });
});

// Form Validation
document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const feedback = document.getElementById('feedback');

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = "Invalid email format.";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    return;
  }

  feedback.style.color = "green";
  feedback.textContent = "Form submitted successfully!";
});

// Real-time Feedback
document.getElementById('password').addEventListener('input', () => {
  const pass = document.getElementById('password').value;
  const feedback = document.getElementById('feedback');
  if (pass.length < 8) {
    feedback.textContent = "Password too short!";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Password looks good!";
    feedback.style.color = "green";
  }
});
