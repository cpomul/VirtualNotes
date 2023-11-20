import { ArrayAppender } from "./ArrayAppender.js";
import { Renderer } from "./Renderer.js";
import { DialogCreator } from "./Dialog.js";
const showDialogButton = document.querySelector("#showDialogButton");
let array1 = [];
let arrayappender = new ArrayAppender(array1);

// Create an instance of DialogCreator
var dialogCreator = new DialogCreator();

// Call createAndAppend method to create and append the dialog
dialogCreator.createAndAppend("main-container");

// Get the submit button using the instance method getSubmitButton
const submitButton = dialogCreator.getSubmitButton();

// Add an event listener to the submit button
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  arrayappender.addInfoToArray();
  console.log(array1);
});

showDialogButton.addEventListener("click", () => {
  dialog.showModal();
});
