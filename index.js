import { ArrayAppender } from "./ArrayAppender.js";
import { Renderer } from "./Renderer.js";
import { DialogCreator } from "./Dialog.js";
const showDialogButton = document.querySelector("#showDialogButton");

let array1 = [];
let arrayappender = new ArrayAppender(array1);
let renderer = new Renderer(array1, "#container1");

let dialogCreator = new DialogCreator();
dialogCreator.createAndAppend("main-container");
const submitButton = dialogCreator.getSubmitButton();
const closeButton = dialogCreator.getCloseButton();

submitButton.addEventListener("submit", (event) => {
  event.preventDefault();
  arrayappender.addInfoToArray();
  renderer.render();
  dialog.close();
});
closeButton.addEventListener("click", (event) => {
  event.preventDefault();
  dialog.close();
});

showDialogButton.addEventListener("click", () => {
  dialog.showModal();
});
