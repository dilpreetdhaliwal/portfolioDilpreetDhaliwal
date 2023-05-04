

const carousel = document.querySelector('.carousel');
let currentQuoteIndex = 0;

function displayQuote() {
  const quoteContainers = document.querySelectorAll('.quoteContainer');
  quoteContainers.forEach((quoteContainer, index) => {
    if (index === currentQuoteIndex) {
      quoteContainer.classList.add('active');
    } else {
      quoteContainer.classList.remove('active');
    }
  });
}

function nextQuote() {
  currentQuoteIndex++;
  if (currentQuoteIndex >= document.querySelectorAll('.quoteContainer').length) {
    currentQuoteIndex = 0;
  }
  displayQuote();
}

function previousQuote() {
  currentQuoteIndex--;
  if (currentQuoteIndex < 0) {
    currentQuoteIndex = document.querySelectorAll('.quoteContainer').length - 1;
  }
  displayQuote();
}

const arrowLeft = document.querySelector('.arrowLeft');
arrowLeft.addEventListener('click', previousQuote);

const arrowRight = document.querySelector('.arrowRight');
arrowRight.addEventListener('click', nextQuote);

displayQuote();
setInterval(nextQuote, 10000);