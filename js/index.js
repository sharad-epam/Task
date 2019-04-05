let resultHtml = "";
const getResults = (
  { author, title, description, publishedAt, url, urlToImage },
  index
) => {
  const item = index === 0 ?<result-info [author]=`${item}` ></result-info> : "";
  resultHtml += `${item}<div class="title">${title}</div><div class="desc">${description}</div><div class="publish">${publishedAt}</div><div class="img"><a href="${url}" target="_blank"><img class="pic" src=${urlToImage} /></a></div>`;
};
class fetchItems {
  fetchingNews = async url => {
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
}

const result = new fetchItems();
export default result;

