newsLoader();

document.getElementById("searchInput").addEventListener("keyup", function (e) {
  var searchInput = e.target.value;
  newsLoader(searchInput);
});

function newsLoader(searchInput = "") {}

fetch(
  "https://newsapi.org/v2/everything?q=tesla&from=2023-12-04&sortBy=publishedAt&apiKey=886b5f9aaf0643f1be5a9134a255e56e"
)
  .then((response) => {
    //  throws an error if the request did not succeed.
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // console.log(response);
    return response.text();
  })
  // When response.text() has succeeded, the `then()` handler is called with
  // the text, and we copy it into the `poemDisplay` box.
  .then((text) => {
    poemDisplay.textContent = text;
  })
  // Catch any errors that might happen, and display a message
  // in the `poemDisplay` box.
  .catch((error) => {
    poemDisplay.textContent = `Could not fetch verse: ${error}`;
  });

// loadUsers();

// document.getElementById("search").addEventListener("keyup", (e) => {
//   var searchValue = e.target.value;
//   loadUsers(searchValue);
// });

// function loadUsers(searchValue = "") {
//   var users = [];

//   fetch("./user.json")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log("users", data);

//       if (searchValue) {
//         users = data.filter(function (item) {
//           return item.firstName.includes(searchValue);
//         });
//         console.log(users);
//       } else {
//         users = data;
//       }

//       var mainElement = document.getElementById("section");
//       for (let i = 0; i < users.length; i++) {
//         var userDivString = `
//       <figure>
//             <img src="images/${users[i].image}" alt="boy pic">
//             <figcaption><b>${users[i].firstName} ${users[i].lastName}</b></figcaption>
//             <span>${users[i].city}, ${users[i].country}</span>
//             <hr>
//       </figure>
//   `;

//         const parser = new DOMParser();
//         var userDiv = parser.parseFromString(userDivString, "text/html").body
//           .firstChild;
//         mainElement.appendChild(userDiv);
//       }
//     });
// }

// //display users on html
