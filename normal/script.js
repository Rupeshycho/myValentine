const card = document.getElementById('card');
const popup = document.getElementById('popup');
const question = document.getElementById('question');

const yesBtn1 = document.getElementById('yesBtn1');
const noBtn1 = document.getElementById('noBtn1');

let step = 1; // Track which step

// Step 1: Click pink card to open popup
card.addEventListener('click', () => {
  card.style.display = 'none';
  popup.style.display = 'block';
});

// Step 1 buttons
noBtn1.addEventListener('click', () => {
  // Make Yes button 30% bigger
  yesBtn1.style.transform = 'scale(1.3)';
});

yesBtn1.addEventListener('click', () => {
  // Step 2 question
  step = 2;
  question.textContent = 'Do you love me forever?';

  // Reset Yes button size
  yesBtn1.style.transform = 'scale(1)';

  // Reassign buttons for step 2
  yesBtn1.onclick = () => {
    question.textContent = 'Yay! I love you ❤️';
    yesBtn1.style.display = 'none';
    noBtn1.style.display = 'none';
  };

  noBtn1.onclick = () => {
    yesBtn1.style.transform = 'scale(1.39)';
  };
});
