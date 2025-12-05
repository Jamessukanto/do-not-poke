// Import images - Vite will process and optimize these
import earImg from './ear.png';
import earPressedImg from './ear_pressed.png';

// Set current year
document.getElementById('current-year').textContent = new Date().getFullYear();

const messages = [
  "It says: Do not poke!",
  "Very mature...",
  "Security!!",
  "Stop it.",
  "Hey, cut it out!",
  "It hurts...",
  "Ouch!",
  "Seriously?",
  "Okay, that's enough.",
  "Try the other buttons instead.",
  "This is getting old.",
  "Last warning!",
  "Interesting choice. Very bold. Very wrong.",
  "Look at you, living dangerously for no reason.",
  "Some people learn. Some people poke me.",
  "At this point I'm just taking notes.",
  "This button isn't a personality test, but you're failing it anyway.",
  "If curiosity kills cats, you're on your ninth life.",
  "Congratulations, you found the world's most pointless rebellion.",
  "Do you click crosswalk buttons like this too?",
  "You need therapy.",
  "Ow. Personal space? Ever heard of it?",
  "One more poke and I'm calling the police.",
  "Hullo? Police???",
  "I'm being assaulted!",
  "Wow, bold. Harassing an ear.",
  "I'm an ear, not a doorbell.",
  "Have you considered... not touching me?",
  "Why are you like this? Why?",
  "I did not consent to this.",
  "Bruh. I'm an ear, not a button. Stop.",
  "You know what? I think I'm starting to like this.",
  "Yes.",
  "Poke away.",
  "Poke into oblivion, you sick monster.",
  "Huh?",
  "Did you say something? Cus I can't hear.",
  "Please... Please stop.",
];

const pokeButton = document.querySelector('.btn-overlay');
const messageElement = document.getElementById('poke-message');
const heroImage = document.querySelector('.hero-image');
let currentMessageIndex = -1;
let isPressed = false;

// Set initial image
heroImage.src = earImg;

function setImageState(pressed) {
  heroImage.src = pressed ? earPressedImg : earImg;
  isPressed = pressed;
}

pokeButton.addEventListener('pointerdown', function(e) {
  e.preventDefault();
  setImageState(true);
});

document.addEventListener('pointerup', function() {
  if (isPressed) {
    setImageState(false);
  }
});

// Rotate through messages on click
pokeButton.addEventListener('click', function() {
  currentMessageIndex = (currentMessageIndex + 1) % messages.length;
  messageElement.textContent = messages[currentMessageIndex];
});

