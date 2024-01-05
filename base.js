loadNews();

// var url =
//   "https://newsapi.org/v2/everything?q=tesla&apiKey=886b5f9aaf0643f1be5a9134a255e56e";

document.getElementById("searchUsers").addEventListener("click", (e) => {
  var inputSearch = e.target.value;
  loadNews(inputSearch);
});

function loadNews(inputSearch = "") {
  var newsVendor = [];

  inputSearch = inputSearch ? inputSearch : "tesla";
  let url = `https://newsapi.org/v2/everything?q=${inputSearch}&apiKey=886b5f9aaf0643f1be5a9134a255e56e`;

  var fullPage = document.getElementById("page_container");

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("newsVendor", data);

      if (inputSearch) {
        newsVendor = data.articles;
        fullPage.innerHTML = "";
        console.log(newsVendor);
      } else {
        newsVendor = data.articles;
      }

      for (let i = 0; i < newsVendor.length; i++) {
        var newsElement = `

        <figure class="figure">
            <img src="${
              newsVendor[i].urlToImage ?? "images/team.jpg"
            }" alt="football team">
            <a href="${newsVendor[i].url}">${newsVendor[i].title}</a>
            <article>${newsVendor[i].description}</article>
            <figcaption>${newsVendor[i].content}</figcaption>
            <p>${new Date(newsVendor[i].publishedAt).toDateString()}</p>

        </figure>
      `;

        const parser = new DOMParser();
        var newsPageDiv = parser.parseFromString(newsElement, "text/html").body
          .firstChild;
        fullPage.append(newsPageDiv);
      }
    });
}
