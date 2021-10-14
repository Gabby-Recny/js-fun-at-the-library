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
  reviews.push(bookReview);
  for(var i = 0; i < reviews.length; i++) {
      if (reviews[i] === bookReview) {
        console.log(reviews[i])
      }
    } reviews.length
  }

function calculatePageCount(bookTitle) {
  return (bookTitle.length) * 20;
}

function writeBook(bookTitle, protagonist) {
  var numOfPages = 0;
  var book = {
    title: bookTitle,
    mainCharacter: protagonist,
    pageCount: numOfPages,
    genre: "fantasy",
  }
  return book;
}

function editBook(bookTitle) {
  

}




module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
