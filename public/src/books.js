function findAuthorById(authors, id) {
  let foundId = accounts.find((account) => account.id === id);
  return foundId;
}

function findBookById(books, id) {
  let foundBookId = books.find((book) => book.id === id);
  return foundBookId
}

function partitionBooksByBorrowedStatus(books) {
  let returned = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true))

  let borrowed = books.filter((book) => 
  book.borrows.some((borrow) => borrow.returned === false))

  let results = [[...borrowed], [...returned]]
  return results
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
  .map((borrow)=> {
    let acct = accounts.find((account) => account.id === borrow.id)
    return {...borrow, ...account}
  })
  .slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
