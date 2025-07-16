const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

const quotes = [
  "Know thyself. – Socrates",
  "God is light. – 1 John 1:5",
  "The unexamined life is not worth living. – Socrates",
  "Pray without ceasing. – 1 Thessalonians 5:17",
  "In the beginning was the Word. – John 1:1",
  "Acquire the Spirit of Peace, and a thousand souls around you will be saved. – St. Seraphim of Sarov",
  "Do not be afraid of the struggle; the Lord will fight for you. – St. Moses the Black",
  "The closer a man is to God, the more he sees himself as a sinner. – St. Isaac the Syrian",
  "The Glory of God is man fully alive. – St. Irenaeus",
  "When you are praying alone, and your spirit is dejected and faint, and your soul is sorrowful, remember then that God is watching you. – St. Isaac the Syrian",
  "He who is not obedient cannot enter the Kingdom of Heaven. – St. Silouan the Athonite",
  "The truth is not known through argument, but by purity of heart. – St. Gregory the Theologian",
  "All we have to decide is what to do with the time that is given us. – Gandalf",
  "Even the smallest person can change the course of the future. – Galadriel",
  "There is some good in this world, and it’s worth fighting for. – Samwise",
  "A day may come when the courage of men fails, but it is not this day! – Aragorn",
  "Not all those who wander are lost. – J.R.R. Tolkien",
  "I will not say: do not weep; for not all tears are an evil. – Gandalf",
  "Hell will freeze over before I yield. – Barbarian",
  "The world is always in peril. That’s why we keep fighting. – Diablo II manual",
  "I’ll never stop training. There’s always someone stronger. – Goku",
  "It’s not the face that makes someone a monster; it’s the choices they make with their lives. – Naruto",
  "The world is not beautiful, therefore it is. – Kino’s Journey",
  "A dream... is worth fighting for. – Luffy",
  "If you don’t take risks, you can’t create a future. – Monkey D. Luffy",
  "Even a pebble causes ripples. – Kenshin",
  "Do not fear death so much, but rather the inadequate life. – Guts",
  "In the end, we are all pawns. – Dragon Age: Origins",
  "A hero need not speak. When he is gone, the world will speak for him. – Halo",
  "War. War never changes. – Fallout",
  "It’s dangerous to go alone! Take this. – Legend of Zelda",
  "Hope is what makes us strong. – God of War",
];

document.getElementById("quote-btn").addEventListener("click", () => {
  const index = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote-text").innerText = quotes[index];
});
const games = [
  "Dark Souls",
  "Diablo II",
  "Elden Ring",
  "Baldur’s Gate 3",
  "Hollow Knight",
  "Resident Evil 4",
  "Bloodborne",
  "Age of Empires II",
  "Persona 5",
  "The Witcher 3"
];

const gameBox = document.getElementById("game-box");

// Create the result element once
const result = document.createElement("p");
result.style.marginTop = "10px";
result.style.fontStyle = "italic";
gameBox.appendChild(result);

document.getElementById("game-btn").addEventListener("click", () => {
  const chosen = games[Math.floor(Math.random() * games.length)];
  result.innerText = `Featured Game: ${chosen}`;
});