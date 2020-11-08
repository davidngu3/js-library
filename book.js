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

let theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, true);
console.log(theHobbit.info());