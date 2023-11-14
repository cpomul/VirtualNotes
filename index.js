import { ArrayAppender } from "./ArrayAppender.js";

const showDialogButton = document.querySelector("#showDialogButton");
const submitFormButton = document.querySelector("#submitFormButton");
const dialog = document.querySelector("#dialog");
const closeDialog = document.querySelector("#closeDialog");

const array1 = [];

const arrayAppender = new ArrayAppender(array1);
submitFormButton.addEventListener("click", () => {
  event.preventDefault();
  arrayAppender.addInfoToArray();
});

// Button functionality
function openDialog() {
  dialog.showModal();
}

function closeDialogBox() {
  dialog.close();
}
showDialogButton.addEventListener("click", openDialog);
submitFormButton.addEventListener("click", closeDialogBox);
closeDialog.addEventListener("click", closeDialogBox);
