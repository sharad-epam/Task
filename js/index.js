const API_KEY = `acfe6a939a5642678d8ea20b50748780`;
const channel = "bbc-news";
const url = `https://newsapi.org/v1/articles?source=${channel}&apiKey=${API_KEY}`;
let resultHtml = "";
const getResults = (
  { author, title, description, publishedAt, url, urlToImage },
  index
) => {
  const item = index === 0 ? `<h1 class="author">${author}</h1>` : "";
  resultHtml += `${item}<div class="title">${title}</div><div class="desc">${description}</div><div class="publish">${publishedAt}</div><div class="img"><a href="${url}" target="_blank"><img class="pic" src=${urlToImage} /></a></div>`;
};
const fetchingNews = async url => {
 try {
    const res = await fetch(url);
    let data = await res.json();
    let newsId = document.getElementById("news");
    data = data.articles.map((item, index) => getResults(item, index));
    newsId.insertAdjacentHTML("afterbegin", resultHtml);
  } catch (err) {
    console.error(err);
  }
};

fetchingNews(url);
