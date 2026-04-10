let color = document.getElementById("color");
let colorSpan = color.querySelector("span");
let colorButton = color.querySelector("button");
colorButton.onclick = function () {
  colorSpan.textContent = "Blue, duh?";
}

let type = document.getElementById("type");
let typeSpan = type.querySelector("span");
let typeButton = type.querySelector("button");
typeButton.onclick = function () {
  typeSpan.textContent = "Blondes?";
}

let food = document.getElementById("food");
let foodSpan = food.querySelector("span");
let foodButton = food.querySelector("button");
foodButton.onclick = function () {
  foodSpan.textContent = "Lemons";
}

let books = document.getElementById("books");
let booksSpan = books.querySelector("span");
let booksButton = books.querySelector("button");
booksButton.onclick = function () {
  booksSpan.textContent = "Yes";
}

let show = document.getElementById("show");
let showSpan = show.querySelector("span");
let showButton = show.querySelector("button");
showButton.onclick = function () {
  showSpan.textContent = "Game of Thrones";
}

