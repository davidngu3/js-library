let myLibrary = [];

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

Book.prototype.changeReadStatus = function() {
    this.read = !this.read; // invert read status
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    let cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; // clear cards

    myLibrary.forEach((book, idx) => {
        let bookTitle = document.createElement("h2");
        bookTitle.innerText = book.title;
        let bookAuthor = document.createElement("h2");
        bookAuthor.innerText = book.author;
        let bookPages = document.createElement("p");
        bookPages.innerText = `${book.pages} Pages`;
        let bookRead = document.createElement("p");
        bookRead.innerText = book.read ? "Read" : "Not Read";

        let readBtn = document.createElement("button");
        readBtn.innerHTML = "Read/Unread";
        readBtn.addEventListener('click', function() {
            book.changeReadStatus();
            displayBooks();
        });

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "X";
        deleteBtn.addEventListener('click', function() {
            myLibrary.splice(idx, 1);
            displayBooks();
        });

        let bookCard = document.createElement("div");
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookRead);
        bookCard.appendChild(readBtn);
        bookCard.appendChild(deleteBtn);
        bookCard.className = "card";

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

    let addBookBtn = document.getElementById("addBookBtn");
    addBookBtn.addEventListener('click', function() {
        let newBookTitle = document.getElementById("formTitle").value;
        let newBookAuthor = document.getElementById("formAuthor").value;
        let newBookPages = document.getElementById("formPages").value;

        let newBookRead = document.getElementById("formRead");
        let newBookNotRead = document.getElementById("formNotRead");
        let readBool = newBookRead.checked ? true : newBookNotRead ? false : null;

        let newBook = new Book(newBookTitle, newBookAuthor, newBookPages, readBool);
        addBookToLibrary(newBook);
        displayBooks();
    });

});
