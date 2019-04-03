"use strict";

const API_KEY = `acfe6a939a5642678d8ea20b50748780`;
const channel = "bbc-news";
const URL = `https://newsapi.org/v1/articles?source=${channel}&apiKey=${API_KEY}`;
const resultHtml = "";
let getResults = (
  { author, title, description, publishedAt, url, urlToImage },
  index
) => {
  const item = index === 0 ? `<h1 class="author">${author}</h1>` : "";
  resultHtml += `${item}<div class="title">${title}</div><div class="desc">${description}</div><div class="publish">${publishedAt}</div><div class="img"><a href="${url}" target="_blank"><img class="pic" src=${urlToImage} /></a></div>`;
};
let fetchingNews = async url => {
  const res = await fetch(url);
  let data = await res.json();
  data = data.articles.map((item, index) => getResults(item, index));
  elementId.insertAdjacentHTML("afterbegin", returnHtml);
};

fetchingNews(URL);
// let returnHtml = "";
// const getResults = (
//   { author, title, description, publishedAt, url, urlToImage },
//   index
// ) => {
//   const singleVal = index === 0 ? `<h1 class="author">${author}</h1>` : "";
//   returnHtml += `${singleVal}<div class="title">${title}</div><div class="desc">${description}</div><div class="publish">${publishedAt}</div><div class="img"><a href="${url}" target="_blank"><img class="pic" src=${urlToImage} /></a></div>`;
// };
// class fetchdata {
//   FetchingNews(url) {
//     let data = {};
//     fetch(url)
//       .then(res => res.json())
//       .then(item => {
//         data = item;
//         let elementId = document.getElementById("news");
//         data.articles.forEach((item, index) => getResults(item, index));
//         elementId.insertAdjacentHTML("afterbegin", returnHtml);
//       })
//       .catch(error => {
//         console.error("Something went wrong on server", error);
//       });
//   }
// }
// const instance = new fetchdata();
// export default instance;

// import instance from "./index.js";
// const API_KEY = `acfe6a939a5642678d8ea20b50748780`;
// const channel = "bbc-news";
// const URL = `https://newsapi.org/v1/articles?source=${channel}&apiKey=${API_KEY}`;
// instance.FetchingNews(URL);
