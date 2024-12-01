const books = ["Гарри Поттер", "Война и мир", "1984"];

const bookList = document.getElementById('book-list');
const addBookButton = document.getElementById('add-book');
const searchBookButton = document.getElementById('search-book');

function displayBooks() {
    bookList.innerHTML = '';
    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book;
        bookList.appendChild(li);
    });
}


addBookButton.addEventListener('click', () => {
    const newBook = prompt("Введите название книги:");
    if (!newBook) {
        alert("Название книги не введено!");
        return;
    }
    books.push(newBook);
    displayBooks();
});

searchBookButton.addEventListener('click', () => {
    const searchQuery = prompt("Введите название книги для поиска:");
    if (!searchQuery) return;

    let found = false;
    const listItems = bookList.querySelectorAll('li');
    listItems.forEach(item => {
        if (item.textContent.toLowerCase() === searchQuery.toLowerCase()) {
            item.classList.add('highlight');
            found = true;
        } else {
            item.classList.remove('highlight');
        }
    });

    if (!found) {
        alert("Книга не найдена!");
    }
});

displayBooks();
