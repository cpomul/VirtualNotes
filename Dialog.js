export class DialogCreator {
  constructor() {
    this.infoForm = null;
    this.closeButton = null;
  }

  createAndAppend(parentId) {
    const parent = document.getElementById(parentId);

    const dialogTag = this.create();

    // ...

    parent.appendChild(dialogTag);
  }

  create() {
    const dialogTag = document.createElement("dialog");
    dialogTag.setAttribute("id", "dialog");

    this.infoForm = document.createElement("form");
    this.infoForm.setAttribute("id", "infoForm");

    const labelTitle = document.createElement("label");
    labelTitle.textContent = "Title:";
    labelTitle.setAttribute("for", "title");

    const inputTitle = document.createElement("input");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("id", "title");
    inputTitle.setAttribute("required", "");

    const labelAbout = document.createElement("label");
    labelAbout.textContent = "About:";
    labelAbout.setAttribute("for", "about");

    const inputAbout = document.createElement("input");
    inputAbout.setAttribute("type", "text");
    inputAbout.setAttribute("id", "about");
    inputAbout.setAttribute("required", "");

    this.closeButton = document.createElement("input");
    this.closeButton.setAttribute("type", "submit");
    this.closeButton.setAttribute("value", "Close");
    this.closeButton.setAttribute("id", "closeButton");

    const submitButton = document.createElement("input");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Add");
    submitButton.setAttribute("id", "submitFormButton");

    this.infoForm.append(
      labelTitle,
      inputTitle,
      labelAbout,
      inputAbout,
      submitButton,
      this.closeButton
    );
    dialogTag.appendChild(this.infoForm);
    return dialogTag;
  }

  getForm() {
    return this.infoForm;
  }
  getCloseButton() {
    return this.closeButton;
  }
}
