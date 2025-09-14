//your JS code here. If required.
// Select elements
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const submitBtn = document.getElementById("submit");
const bookList = document.getElementById("book-list");

// Handle submit
submitBtn.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent page reload

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn = isbnInput.value.trim();

  // Simple validation
  if (title === "" || author === "" || isbn === "") {
    alert("Please fill all fields.");
    return;
  }

  // Create a new row
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">Clear</button></td>
  `;

  // Append row to table
  bookList.appendChild(row);

  // Clear inputs
  titleInput.value = "";
  authorInput.value = "";
  isbnInput.value = "";
});

// Handle delete (event delegation)
bookList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    const row = e.target.closest("tr");
    row.remove();
  }
});
