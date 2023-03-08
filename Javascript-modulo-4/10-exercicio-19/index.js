const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Titulo do post", "Loren ipsum dolor sic.....")

post.addComment("Diego Galdino", "muito bom")
post.addComment("Dayane", "Achei legal")

console.log(john)
console.log(post)