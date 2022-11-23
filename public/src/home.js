function getTotalBooksCount(books) {
  let total = books.reduce(sum => sum + 1, 0);
  return total
}
function getTotalAccountsCount(accounts) {
  let total = accounts.reduce(sum => sum + 1, 0)
return total
}

  function getBooksBorrowedCount(books) {
    let booksCheckedOut = books.filter((book) =>  book.borrows.filter((record) => record.returned === false).length > 0
    );
    return booksCheckedOut.length;
   }


  function sortGenres(genreA, genreB) {
    return genreB.count - genreA.count;
  }
  function getMostCommonGenres(books) {
  const genres = books.reduce((acc,book) => {
    const { genre } = book
    !acc[genre] ?  acc[genre] = { name: genre, count: 1 } :  acc[genre].count++
    return acc
  },{}) 
  return Object.values(genres).sort(sortGenres).slice(0, 5);
  }

  function getMostPopularBooks(books) {
    return books
     .map((book) => {
      return { name: book.title, count: book.borrows.length };
     })
     .sort((a, b) => (a.count < b.count ? 1 : -1))
     .slice(0, 5);
   }


   function getMostPopularAuthors(books, authors) {
    let result = [];
    authors.forEach((author) => {
     let theAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
     };
     books.forEach((book) => {
      if (book.authorId === author.id) {
       theAuthor.count += book.borrows.length;
      }
     });
     result.push(theAuthor);
    });
    return result.sort((a, b) => b.count - a.count).slice(0, 5);
   }
 
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
