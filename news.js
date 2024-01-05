loadNews();

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
            <p>${users[i].title}</p>
            <article>${users[i].description}</article>
            <a href="images/team.jpg">Click image</a>
            <figcaption>${users[i].content}</figcaption>
            <hr>
         </figure>
      `;

        const parser = new DOMParser();
        var fullPageDiv = parser.parseFromString(userElementString, "text/html")
          .body.firstChild;
        fullPageString.appendChild(fullPageDiv);
      }
    });
}
