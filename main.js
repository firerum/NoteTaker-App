 let i = 1; // To increment the unordered list items (aka notes) by 1
const modal = document.querySelector(".modal");
const ul = document.querySelector("ul");
const noteForm = document.forms.note;
noteForm.addEventListener("submit", e => {
  e.preventDefault();
  // Create Elements.
  const note = noteForm.querySelector("textarea").value;
  const noteHeading = document.createElement("li");
  const noteSnippet = document.createElement("span");
  const button = document.createElement("button");
  // Open Modal box on click of View details button.
  const snippet = document.querySelector(".snippet");
  const noteDiv = document.createElement("div");
  noteDiv.textContent = note;
  snippet.appendChild(noteDiv);
  button.addEventListener("click", e => {
    modal.style.display = "block";
  });
  // Close the modal box
  const closeModal = document.querySelector(".close-modal");
  closeModal.addEventListener("click", (e) => {
    modal.style.display = "none";
  });

  // Add content to the created elements.
  noteHeading.textContent = `Note ${i++}`;
  noteSnippet.textContent = note;
  button.textContent = "View Detail";
  // Append elements to the page.
  noteHeading.appendChild(noteSnippet);
  noteHeading.appendChild(button);
  ul.appendChild(noteHeading);
});
