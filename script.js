const yesButton = document.querySelector('.yes-button');
const noButton = document.querySelector('.no-button');

const messages = [
  "Are you sure? 😭",
  "Really sure??? 😓",
  "Are you positive?",
  "Pookie please 🙏",
  "Just think about it!!",
  "If you say no, I will be really sad 😔",
  "I will be very sad 😥",
  "I will be very very very sad 😥😥",
  "Ok fine, I will stop asking 🙄",
  "Just kidding, say yes please! ❤️"
];

let clickCount = 0;

noButton.addEventListener("click", () => {
  if (clickCount < messages.length) {
    document.getElementById("alertText").innerText = messages[clickCount];
    showAlert();
    clickCount++;
    moveNoButton(); // Ilipat ang no-button
  } else {
    clickCount = 0;
  }
});

yesButton.addEventListener("click", () => {
  window.location.href = "yes_page.html";
});

function showAlert() {
  document.getElementById("customAlert").style.display = "block";
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}

// Function para ilipat ang no-button
function moveNoButton() {
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  
  // Kunin ang dimensions ng container
  const container = document.querySelector('.buttons-container');
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  
  // Kalkulahin ang maximum na posisyon
  const maxX = containerWidth - buttonWidth;
  const maxY = containerHeight - buttonHeight;
  
  // Gumawa ng random na posisyon
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  // Ilipat ang button
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}