// function fetchBooks() {
//   fetch('https://anapioficeandfire.com/api/books')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   console.log('before fetch returns')
//   // To pass the tests, don't forget to return your fetch!
  
// }


function fetchBooks() {

  const main = document.querySelector('main');
  return fetch('https://anapioficeandfire.com/api/books')
  .then((response) => response.json())
  .then(data => renderBooks(data))
  .catch(err => {console.log(err)});
  

}

  
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
