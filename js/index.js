
let resultHtml = "";
const getResults = (
  { author, title, description, publishedAt, url, urlToImage },
  index
) => {
  console.log(title);
  const item = index === 0 ? `${author}` : "";
    resultHtml += `<div><result-info author="${item}" title="${title}" desc="${description}" publish="${publishedAt}" img="${urlToImage}"></result-info></div>`;
};
class fetchItems {
  fetchingNews = async url => {
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
}

const result = new fetchItems();
export default result;
