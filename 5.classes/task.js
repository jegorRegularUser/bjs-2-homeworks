
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(value) {
        this._state = value <= 0 ? 0 : value >= 100 ? 100 : value
    }

    get state() {
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.state = 100;
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.author = author;
        this.state = 100;
        this.type = "book";
    }
}

const createBookSubclass = (type) => {
    return class extends Book {
        constructor(author, name, releaseDate, pagesCount) {
            super(name, releaseDate, pagesCount)
            this.author = author;
            this.state = 100;
            this.type = type;
        }
    };
};
const NovelBook = createBookSubclass("novel");
const FantasticBook = createBookSubclass("fantastic");
const DetectiveBook = createBookSubclass("detective");

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
        }
    }
    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }
    giveBookByName(bookName) {
        return this.books.find((book, index) => {
            if (book.name === bookName) {
                this.books.splice(index)
                return book
            }
        }) || null;
    }
}

