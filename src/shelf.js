function shelfBook(bookTitle, genreShelf) {
  if (genreShelf.length < 3)  {
    genreShelf.unshift(bookTitle);
  }
}

function unshelfBook(bookTitle, genreShelf) {
  for(var i = 0; i < genreShelf.length; i++) {
    if (genreShelf[i].title === bookTitle) {
      genreShelf.splice(i, 1)
    }
  }
}

function listTitles(genreShelf) {
  var titles = [];
  for(var i = 0; i < genreShelf.length; i++) {
    titles.push(genreShelf[i].title)
    console.log(titles)
  }
  var newTitles = titles.join(', ');
  return newTitles;
}

function searchShelf(genreShelf, bookTitle) {
  for(var i = 0; i < genreShelf.length; i++) {
    if(genreShelf[i].title === bookTitle) {
      return true
    }
  } return false
}



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
