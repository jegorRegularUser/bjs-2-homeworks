
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



class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (!this.marks.hasOwnProperty(subject)) {
            this.marks[subject] = [];
        }
        if (mark >= 2 && mark <= 5) {
            this.marks[subject].push(mark);
        }

    }

    getAverageBySubject(subject) {
        return !this.marks.hasOwnProperty(subject) ? 0 :
            this.marks[subject].reduce((acc, curr) => acc + curr, 0)
            / this.marks[subject].length;
    }

    getAverage() {
        const subjects = Object.keys(this.marks);

        return subjects.length === 0 ? 0 :
            subjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0)
            / subjects.length;
    }

}
const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
console.log(student.getAverageBySubject("физика")); // Средний балл по предмету физика 4.5
console.log(student.getAverageBySubject("биология")); // Вернёт 0, так как по такому предмету нет никаких оценок.
console.log(student.getAverage())