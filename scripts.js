// Predefined list of books (dashboard)
let dashboardBooks = [
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", isbn: "9780747532743", genre: "Fantasy", quantity: 10 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "9780061120084", genre: "Classic", quantity: 7 },
    { title: "1984", author: "George Orwell", isbn: "9780451524935", genre: "Dystopian", quantity: 5 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "9780743273565", genre: "Classic", quantity: 3 },
    { title: "Pride and Prejudice", author: "Jane Austen", isbn: "9780141439518", genre: "Romance", quantity: 6 },
];

// Display predefined books on the dashboard
function displayDashboardBooks() {
    let bookListDiv = document.getElementById('bookList');
    let html = '';
    dashboardBooks.forEach(book => {
        html += `
            <div class="book">
                <h2>${book.title}</h2>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>ISBN:</strong> ${book.isbn}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
                <p><strong>Quantity:</strong> ${book.quantity}</p>
            </div>
        `;
    });
    bookListDiv.innerHTML = html;
}

// Function to perform binary search by title
function binarySearch(books, title) {
    let left = 0;
    let right = books.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (books[mid].title === title) {
            return mid; // Book found
        } else if (books[mid].title < title) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Book not found
}

// Function to handle form submission
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let searchTerm = document.getElementById('searchInput').value.trim();
    let index = binarySearch(dashboardBooks, searchTerm);

    let searchResultsDiv = document.getElementById('searchResults');
    if (index !== -1) {
        let book = dashboardBooks[index];
        let bookHTML = `
            <div class="book">
                <h2>${book.title}</h2>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>ISBN:</strong> ${book.isbn}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
                <p><strong>Quantity:</strong> ${book.quantity}</p>
            </div>
        `;
        searchResultsDiv.innerHTML = bookHTML;
    } else {
        searchResultsDiv.innerHTML = '<p>No results found</p>';
    }
});

// Display predefined books on page load
displayDashboardBooks();
