export class DialogCreator {
  constructor() {
    this.submitButton = null;
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

    const form = document.createElement("form");
    form.setAttribute("id", "infoForm");

    const labelTitle = document.createElement("label");
    labelTitle.textContent = "Title:";
    labelTitle.setAttribute("for", "title");

    const inputTitle = document.createElement("input");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("id", "title");

    const labelAbout = document.createElement("label");
    labelAbout.textContent = "About:";
    labelAbout.setAttribute("for", "about");

    const inputAbout = document.createElement("input");
    inputAbout.setAttribute("type", "text");
    inputAbout.setAttribute("id", "about");

    this.submitButton = document.createElement("input");
    this.submitButton.setAttribute("type", "submit");
    this.submitButton.setAttribute("value", "Add");
    this.submitButton.setAttribute("id", "submitFormButton");

    form.append(
      labelTitle,
      inputTitle,
      labelAbout,
      inputAbout,
      this.submitButton
    );
    dialogTag.appendChild(form);
    return dialogTag;
  }

  getSubmitButton() {
    return this.submitButton;
  }
}
