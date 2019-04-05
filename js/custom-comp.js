class ResultInfo extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const author = document.createElement("h1");
    author.setAttribute("class", "author");
    let authordata = this.getAttribute("author");
    author.textContent = authordata;

    const title = document.createElement("div");
    title.setAttribute("class", "title");

    const desc = document.createElement("div");
    desc.setAttribute("class", "desc");

    const publish = document.createElement("div");
    publish.setAttribute("class", "publish");

    const img = document.createElement("div");
    img.setAttribute("class", "img");

    let imgUrl;
    this.hasAttribute("img") ? (imgUrl = this.getAttribute("img")) : "No Image";

    let image = document.createElement("img");
    image.src = imgUrl;
    img.appendChild(image);

    shadow.appendChild(author);
    wrapper.appendChild(title);
    wrapper.appendChild(desc);
    wrapper.appendChild(publish);
    wrapper.appendChild(img);
    wrapper.appendChild(image);
  }
}

customElements.define("result-info", ResultInfo);
