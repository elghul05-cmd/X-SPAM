// web.js
// Typewriter that writes once, then triggers landing content reveal

const typeEl = document.getElementById('typewriter');
const landing = document.querySelector('.landing');
const landingContent = document.querySelector('.landing-content');

const text = " SPAM IS HERE ! "; // غيّر النص هنا لو عايز
let idx = 0;
let isDeleting = false;

function typeOnce(){
  // write forward
  if(!isDeleting){
    typeEl.textContent = text.substring(0, idx++);
  } else {
    typeEl.textContent = text.substring(0, idx--);
  }

  // finished writing -> wait then start deleting
  if(!isDeleting && idx === text.length + 1){
    // small pause then delete
    isDeleting = true;
    setTimeout(typeOnce, 700);
    return;
  }

  // finished deleting -> reveal landing content and stop
  if(isDeleting && idx === 0){
    typeEl.textContent = '';
    // add class to show landing content
    landing.classList.add('show-content');
    // optional: remove the cursor animation class by clearing border
    typeEl.style.borderRight = '0';
    return;
  }

  setTimeout(typeOnce, isDeleting ? 50 : 110);
}

// Start typing after a tiny delay so CSS applied & page loaded visually
window.addEventListener('load', () => {
  setTimeout(typeOnce, 300);
});
