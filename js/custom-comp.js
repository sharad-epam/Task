class ResultInfo extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const wrapper = document.createElement("div");
    author.setAttribute("class", "container");

    const news = document.createElement("div");
    news.setAttribute("id", "news");

    const author = document.createElement("h1");
    author.setAttribute("class", "author");
    author.textContent = this.getAttribute("author");

    const title = document.createElement("div");
    title.setAttribute("class", "title");
    title.textContent = this.getAttribute("title");

    const desc = document.createElement("div");
    desc.setAttribute("class", "desc");
    desc.textContent = this.getAttribute("desc");

    const publish = document.createElement("div");
    publish.setAttribute("class", "publish");
    publish.textContent = this.getAttribute("publish");

    const img = document.createElement("div");
    img.setAttribute("class", "img");

    let imgUrl;
    this.hasAttribute("img") ? (imgUrl = this.getAttribute("img")) : "No Image";

    let pic = document.createElement("img");
    publish.setAttribute("class", "pic");
    pic.src = imgUrl;
    img.appendChild(pic);

    shadow.appendChild(wrapper);
    wrapper.appendChild(news);
    news.appendChild(author);
    news.appendChild(title);
    news.appendChild(desc);
    news.appendChild(publish);
    news.appendChild(img);
    news.appendChild(pic);
  }
}

customElements.define("result-info", ResultInfo, { extends: "ul" });
