/* Quotes */
const quotes = [
    {
     text: "Work Hard, Study Well, Eat and Sleep Plenty, that is the Turtle Hermit Way!",
     author:"Master Roshi",
     img:"img/quotes1.png",
    },
    {
     text: "Everything is for man to love Christ, everything else is taken care of.",
     author:"St. Porphyrios",
     img:"img/quotes2.png",
    },
    {
     text: "The only limits we have, are the limits we place on ourselves.",
     author:"Son Goku",
     img:"img/quotes3.png",
    },
    {
     text: "To know what is right and not to do it is the wok of a coward.",
     author:"Naruto Uzumaki",
     img:"img/quotes4.png",
    },
    {
     text: "Even the wise cannot see all ends.",
     author:"Gandalf the Grey",
     img:"img/quotes5.png",
    },
];

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");

let current = 0;

function showQuote(index) {
  const quote = quotes[index];
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = `– ${quote.author}`;
  document.getElementById("quote-box").style.backgroundImage = `url(${quote.img})`;
}

setInterval(() => {
  current = (current + 1) % quotes.length;
  showQuote(current);
}, 5000);

showQuote(current);