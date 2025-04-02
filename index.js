function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json()) // Convert response to JSON
    .then((books) => {
      renderBooks(books); // Call renderBooks with the JSON data
    })
    .catch((error) => console.error("Error fetching books:", error)); // Handle errors
}

function renderBooks(books) {
  const bookList = document.getElementById("book-list"); // Target the book list in index.html
  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = book.name; // Display the book name
    bookList.appendChild(li);
  });
}

// Call fetchBooks when the page loads
document.addEventListener("DOMContentLoaded", fetchBooks);
