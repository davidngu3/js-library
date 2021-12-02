class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        let readString = this.read ? "read" : "not read yet";
        return `${title} by ${author}, ${pages} pages, ${readString}`;
    }

    changeReadStatus() {
        this.read = !this.read; 
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBookToLibrary(book) {
        this.books.push(book);
    }

    addSampleBooks() {
        let theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, true);
        let theShining = new Book("The Shining", "S.C Mallien", 323, false);
        let endersGame = new Book("Ender's Game", "S. B. Ballik", 333, true);
        let minecraft = new Book("Minecraft", "Jesus Christ", 211, false);

        this.addBookToLibrary(theHobbit);
        this.addBookToLibrary(theShining);
        this.addBookToLibrary(endersGame);
        this.addBookToLibrary(minecraft);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let lib = new Library();
    lib.addSampleBooks();

    // display books to screen
    let cardContainer = document.getElementById("card-container");
    displayBooks();

    function displayBooks() {
        cardContainer.innerHTML = ""; 

        lib.books.forEach((book, idx) => {
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
            readBtn.className = "btn btn-secondary";
            readBtn.addEventListener('click', function() {
                book.changeReadStatus();
                displayBooks();
            });
    
            let deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "X";
            deleteBtn.className = "btn btn-danger";
            deleteBtn.addEventListener('click', function() {
                lib.books.splice(idx, 1);
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
        });
    }
    
    // new book form
    let addBookBtn = document.getElementById("addBookBtn");
    addBookBtn.addEventListener('click', function() {
        let newBookTitle = document.getElementById("formTitle").value;
        let newBookAuthor = document.getElementById("formAuthor").value;
        let newBookPages = document.getElementById("formPages").value;

        let newBookRead = document.getElementById("formRead");
        let newBookNotRead = document.getElementById("formNotRead");
        let readBool = newBookRead.checked ? true : newBookNotRead ? false : null;

        let newBook = new Book(newBookTitle, newBookAuthor, newBookPages, readBool);
        lib.addBookToLibrary(newBook);
        displayBooks();
    });
});
