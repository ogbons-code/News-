loadNews();

// var url =
//   "https://newsapi.org/v2/everything?q=tesla&apiKey=886b5f9aaf0643f1be5a9134a255e56e";

document.getElementById("searchUsers").addEventListener("keyup", (e) => {
  var inputSearch = e.target.value;
  loadNews(inputSearch);
});

function loadNews(inputSearch = "") {
  var users = [];

  fetch("./news.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("users", data);

      if (inputSearch) {
        users = data.filter(function (item) {
          return item.title.includes(inputSearch);
        });
        console.log(users);
      } else {
        users = data;
      }

      var fullPageString = document.getElementById("page_container");
      for (let i = 0; i < users.length; i++) {
        var userElementString = `

        <figure>
            <img src="images/team.jpg" alt="football team">
            <a href="${users[i].url}">${users[i].title}</a>
            <article>${users[i].description}</article>
            <figcaption>${users[i].content}</figcaption>
            <p>${users[i].publishedAt}</p>

        </figure>
      `;

        const parser = new DOMParser();
        var fullPageDiv = parser.parseFromString(userElementString, "text/html")
          .body.firstChild;
        fullPageString.appendChild(fullPageDiv);
      }
    });
}
