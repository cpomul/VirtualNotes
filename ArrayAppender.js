export class ArrayAppender {
  constructor(specificArray) {
    this.specificArray = specificArray;
  }
  addInfoToArray() {
    const title = document.querySelector("#title").value;
    const about = document.querySelector("#about").value;

    const infoObject = {
      title: title,
      about: about,
    };

    this.specificArray.push(infoObject);
    console.log(this.specificArray);
  }
}
