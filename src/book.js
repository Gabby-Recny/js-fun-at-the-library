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
  reviews.push(bookReview)
  reviews.length;
}



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
