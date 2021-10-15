function createTitle(bookIdea) {
  return `The ${bookIdea}`
}


function buildMainCharacter (name, age, pronouns) {
  var mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
  return mainCharacter;
}

function saveReview(bookReview, reviews) {
  reviews.length
  if(!reviews.includes(bookReview)) {
    reviews.push(bookReview);
  }
}

function calculatePageCount(bookTitle) {
  return (bookTitle.length) * 20;
}

function writeBook(bookTitle, protagonist, genre = "fantasy") {
  var book = {
    title: bookTitle,
    mainCharacter: protagonist,
    pageCount: calculatePageCount(bookTitle),
    genre: "fantasy",
  }
  return book;
}

function editBook(bookTitle) {
  var numOfPages = bookTitle.pageCount;
  bookTitle.pageCount = numOfPages * 0.75
}




module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
