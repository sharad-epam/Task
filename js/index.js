let resultHtml = "";
let newsId = "";
const getResults = (
  { author, title, description, publishedAt, url, urlToImage },
  index
) => {
  const item =
    index === 0 ? `<result-info author=${author} ></result-info>` : "";
  resultHtml += `<result-info item=${item} title=${title} desc=${description} publish=${publishedAt} pic=${urlToImage}>`;
  newsId.insertAdjacentHTML(
    "afterend",
    `<result-info item=${item} title=${title} desc=${description} publish=${publishedAt} pic=${urlToImage}>`
  );
};
class fetchItems {
  fetchingNews = async url => {
    try {
      const res = await fetch(url);
      let data = await res.json();
      newsId = document.getElementById("news");
      data = data.articles.map((item, index) => getResults(item, index));
    } catch (err) {
      console.error(err);
    }
  };
}

const result = new fetchItems();
export default result;
