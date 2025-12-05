// Import images - Vite will process and optimize these
import earImg from './ear.png';
import earPressedImg from './ear_pressed.png';

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

let currentMessageIndex = -1;
let isPressed = false;

function setImageState(pressed) {
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    heroImage.src = pressed ? earPressedImg : earImg;
    isPressed = pressed;
  }
}

function initPokeButton() {
  const pokeButton = document.querySelector('.btn-overlay');
  const messageElement = document.getElementById('poke-message');
  const heroImage = document.querySelector('.hero-image');
  
  if (!pokeButton || !messageElement || !heroImage) {
    return;
  }

  // Set initial image
  heroImage.src = earImg;

  // Prevent context menu on image (mobile long press)
  heroImage.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  });

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

  // Prevent context menu on long press (mobile)
  pokeButton.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  });

  // Prevent touch callout (iOS Safari image preview menu)
  pokeButton.addEventListener('touchstart', function(e) {
    // Don't prevent default here - let pointer events handle it
    // This just prevents the callout menu
  }, { passive: true });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
    initPokeButton();
  });
} else {
  // DOM is already ready
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  initPokeButton();
}

