
const booksLoaded = (newBooks) => {
  return {
    type: "BOOK_LOADED",
    payload: newBooks
  }
}

const booksRequsted = () => {
  return {
    type: "BOOK_REQUESTED"
  }
}

const booksError = (error) => {
  return {
    type: "BOOK_ERROR",
    payload: error

  }
}

const addedBook = (bookId) => {
  return{
    type: 'ADDED_BOOK',
    payload: bookId
  }
}

const removedBook = (bookId) => {
  return{
    type: 'REMOVED_BOOK',
    payload: bookId
  }
}

const allRemovedBook = (bookId) => {
  return{
    type: 'ALL_REMOVED_BOOK',
    payload: bookId
  }
}


const fetchBooks = (bookService, dispatch) => () => {
  dispatch(booksRequsted())
  bookService.getBooks()
    .then((data) => { 
      dispatch(booksLoaded(data))
    })
    .catch((err) => dispatch(booksError(err)))
}

export {
  fetchBooks,
  addedBook,
  removedBook,
  allRemovedBook
}