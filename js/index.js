let resultHtml = "";
const getResults = (
  { author, title, description, publishedAt, url, urlToImage },
  index
) => {
  const item =
    index === 0 ? `<result-info author=${author} ></result-info>` : "";
  resultHtml += `<result-info ${item} ></result-info><result-info ${title} ${description} ${publishedAt} ${urlToImage}></result-info>`;
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
