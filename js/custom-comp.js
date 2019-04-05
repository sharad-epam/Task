class ResultInfo extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const wrapper = document.createElement("div");
    console.log('TESTTE', wrapper );
    wrapper.setAttribute("class", "container");

    // const news = document.createElement("div");
    // news.setAttribute("id", "news");

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
    
    let resultHtml = "";
      const getResults = (
        { author, title, description, publishedAt, url, urlToImage },
        index
      ) => {
        console.log(title);
        const item = index === 0 ? `<result-info ${author} >` : "";
        resultHtml += `<div><result-info title="${title}" description="${description}" publishedAt="${publishedAt}" img="${urlToImage}"></result-info></div>`;
      };

      const fetchingNews = async url => {
      try {
          const res = await fetch(url);
          let data = await res.json();
          let newsId = document.getElementById("news");
          data.articles.map((item, index) => getResults(item, index));
          newsId.insertAdjacentHTML("afterend", resultHtml);
      } catch (err) {
          console.error(err);
      }
      };

    const style = document.createElement("style");
    console.log(style.isConnected);
    style.innerHTML = `
      .news {
        display: flex;
        flex-direction: column;
      }
      .author {
        text-align: center;
        border-bottom: 5px solid #dfe6e9;
      }
      .pic {
        width: 250px;
        height: 200px;
        border-radius: 6%;
        margin: 10px;
      }
      .title {
        font-size: 20px;
        color: #636e72;
        border-bottom: 1px solid;
        padding: 10px;
      }
      .desc {
        padding: 10px;
        color: #2d3436;
        font-size: 20px;
      }
      .publish {
        padding: 10px;
        font-size: 15px;
        border-bottom: 1px solid;
        width: 8%;
        color: #b2bec3;
      }
      @media only screen and (max-width: 500px) {
        .publish {
          width: 50%;
        }
      }
      
    `;

    let news = document.createElement("li");
    shadow.appendChild(style);
    console.log(style.isConnected);
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
