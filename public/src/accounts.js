
function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);

  return found;
 }
 function sortAccountsByLastName(accounts) {
  accounts.sort((a, b) =>
   a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1
  );
  return accounts;
 }

 
 function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;
  for (let i = 0; i < books.length; i++) {
   for (let j = 0; j < books[i].borrows.length; j++) {
    if (account.id === books[i].borrows[j].id) {
     totalBorrows += 1;
    }
   }
  }
  return totalBorrows;
 }


function getBooksPossessedByAccount(account, books, authors) {
let checkedOutBooks = []
books.forEach(book => {
  if(book.borrows.find(borrow => borrow.id === account.id && borrow.returned === false)){
    checkedOutBooks.push(book)
  }})
checkedOutBooks.forEach(book => {
  let authorInfo = authors.find(author => author.id === book.authorId)
  book['author'] = authorInfo
})

return checkedOutBooks
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

