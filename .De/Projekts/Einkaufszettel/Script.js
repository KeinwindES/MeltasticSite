// JavaScript to handle button clicks
const button = document.getElementById("add-button");
const input = document.getElementById("item-input");
const list = document.getElementById("list");

button.addEventListener("click", function () {
  const value = input.value.trim();
  if (value !== "") {
    // Only add if input is not empty
    const listItem = document.createElement("li");
    listItem.textContent = value;
    listItem.classList.add("list-item"); // Add a class for styling
    listItem.addEventListener("click", function () {
      listItem.remove(); // Remove item when clicked
    });
    list.appendChild(listItem);
    input.value = ""; // Clear input after adding
  }
});

// Optional: Allow pressing "Enter" to add items
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    button.click();
  }
});
