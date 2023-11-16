export class Renderer {
  constructor(dataArray, placement) {
    this.dataArray = dataArray;
    this.placement = placement;
  }

  render() {
    const renderContainer = document.querySelector(this.placement);
    renderContainer.innerHTML = "";
    this.dataArray.forEach((item) => {
      const element = document.createElement("div");
      element.textContent = `Title: ${item.title}\nAbout: ${item.about}`;

      renderContainer.appendChild(element);
    });
  }
}
