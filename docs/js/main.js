const quotes = [
  {
    text: "Work Hard, Study Well, Eat and Sleep Plenty, that is the Turtle Hermit Way!",
    author: "Master Roshi",
    img: "img/quotes1.png",
  },
  {
    text: "Everything is for man to love Christ, everything else is taken care of.",
    author: "St. Porphyrios",
    img: "img/quotes2.png",
  },
  {
    text: "The only limits we have, are the limits we place on ourselves.",
    author: "Son Goku",
    img: "img/quotes3.png",
  },
  {
    text: "To know what is right and not to do it is the work of a coward.",
    author: "Naruto Uzumaki",
    img: "img/quotes4.png",
  },
  {
    text: "Even the wise cannot see all ends.",
    author: "Gandalf the Grey",
    img: "img/quotes5.png",
  },
];

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const quoteBox = document.getElementById("quote-box");

let current = 0;

function showQuote(index) {
  // Fade out
  quoteBox.style.opacity = "0";

  setTimeout(() => {
    const quote = quotes[index];
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = `– ${quote.author}`;
    quoteBox.style.backgroundImage = `url(${quote.img})`;

    // Fade back in
    quoteBox.style.opacity = "1";
  }, 400);
}

// Attach listeners
document.getElementById("prev-quote").addEventListener("click", () => {
  current = (current - 1 + quotes.length) % quotes.length;
  showQuote(current);
});

document.getElementById("next-quote").addEventListener("click", () => {
  current = (current + 1) % quotes.length;
  showQuote(current);
});

// Initial call
showQuote(current);
