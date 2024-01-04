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
    });

  if (inputSearch) {
    users = data.filter(function (item) {
      return item.articles.includes(inputSearch);
    });
    console.log(users);
  } else {
    users = data;
  }

  var fullPageString = document.getElementById("container");
  for (let i = 0; i < users.length; i++) {
    var userElementString = `
        <figure>
            <p title="">${users[i].title}</p>
            <p>${users[i].description}</p>
            <a href="">click image<img src="images/${users[i].image}" alt=""></a>
            <figure>${users[i].content}</figure>
            hr
        </figure>
    `;

    const parser = new DOMParser();
    var fullPageDiv = parser.parseFromString(fullPageString, "text/html").body
      .firstChild;
    fullPageString.appendChild(fullPageDiv);
  }
}
