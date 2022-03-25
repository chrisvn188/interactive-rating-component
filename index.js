const RATING_LIST = [1, 2, 3, 4, 5];

const ratingBtns = document.querySelectorAll('.rating-btn');
const submitBtn = document.querySelector('.submit-btn');
const resultText = document.querySelector('.result-text');
const ratingCard = document.querySelector('.rating-card');
const resultCard = document.querySelector('.result-card');
let currentRating;

ratingBtns.forEach(btn =>
  btn.addEventListener('click', e => {
    // remove all active btns
    ratingBtns.forEach(btn => btn.classList.remove('active'));
    // add active class when clicked
    e.target.classList.add('active');
    currentRating = e.target.dataset.rating;
  })
);

submitBtn.addEventListener('click', () => {
  if (currentRating) {
    ratingCard.classList.add('hidden');
    resultCard.classList.remove('hidden');
    resultText.textContent = `You selected ${currentRating} out of 5`;
  }
});
