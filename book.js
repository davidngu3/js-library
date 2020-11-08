let myLibrary = [];

// elements



function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    let readString = this.read ? "read" : "not read yet";
        return `${title} by ${author}, ${pages} pages, ${readString}`;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    myLibrary.forEach(book => {
        let bookTitle = document.createElement("h2");
        bookTitle.innerText = book.title;
        let bookAuthor = document.createElement("h3");
        bookAuthor.innerText = book.author;
        let bookPages = document.createElement("p");
        bookPages.innerText = book.pages;
        let bookRead = document.createElement("p");
        bookRead.innerText = book.read ? "Read" : "Not Read";

        let bookCard = document.createElement("div");
        bookCard.appendChild(bookTitle)
        bookCard.appendChild(bookAuthor)
        bookCard.appendChild(bookPages)
        bookCard.appendChild(bookRead)

        let cardContainer = document.getElementById("card-container");
        cardContainer.appendChild(bookCard);
    })
}

let theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, true);
let theShining = new Book("The Shining", "S.C Mallien", 323, false);
let endersGame = new Book("Ender's Game", "S. B. Ballik", 333, true);
let minecraft = new Book("Minecraft", "Jesus Christ", 211, false);

addBookToLibrary(theHobbit);
addBookToLibrary(theShining);
addBookToLibrary(endersGame);
addBookToLibrary(minecraft);

document.addEventListener('DOMContentLoaded', function() {
    displayBooks();
});
