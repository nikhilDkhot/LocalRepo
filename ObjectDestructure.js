/*ObjectDestructure*/

const book = {
    name: "awarness",
    price: 333,
    author: "osho"
}

//console.log(book.author)
//const {author} = book
const  {author:writer} = book
//console.log(author)
console.log(writer)
