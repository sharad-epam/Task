let resultHtml = "";
const getResults = (
  { author, title, description, publishedAt, url, urlToImage },
  index
) => {
  console.log(title);
  const item = index === 0 ? `<result-info ${author} >` : "";
  resultHtml += `<div><result-info title="${title}" description="${description}" publishedAt=${publishedAt} urlToImage=${urlToImage}></result-info> ${description}</div>`;
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
