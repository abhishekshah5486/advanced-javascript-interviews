// What is object destructuring
// It is a convenient way to extract values from objects and assign them to variables using a syntax that directly maps to the object's structure.

const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
    genres: ["Fiction", "Drama", "Southern Gothic"],
    availableFormats: {
        hardcover: true,
        paperback: true,
        ebook: true,
        audiobook: false
    },
    summary: function() {
        return `${this.title} is a novel by ${this.author}, published in ${this.yearPublished}.`;
    },
}
// Object destructuring syntax
const {title, author, yearPublished} = book;
console.log(title, author, yearPublished);