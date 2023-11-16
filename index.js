import { ArrayAppender } from "./ArrayAppender.js";
import { Renderer } from "./Renderer.js";
const showDialogButton = document.querySelector("#showDialogButton");
const submitFormButton = document.querySelector("#submitFormButton");
const dialog = document.querySelector("#dialog");
const closeDialog = document.querySelector("#closeDialog");
let array1 = [];
let arrayappender = new ArrayAppender(array1);
let renderer = new Renderer(array1, "#container1");
submitFormButton.addEventListener("click", (event) => {
  event.preventDefault();
  arrayappender.addInfoToArray();
  console.log(array1);
  renderer.render();
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
