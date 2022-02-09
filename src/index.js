console.log("Hello from src/index.js!");

const button = document.querySelector("#click-me");

const results = document.querySelector("#results");

// fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data);
//     data.Search.forEach((element) => {
//       const movieTag = `<li class="list-inline-item"><img src="${element.Poster}" alt=""><p>${element.Title}</p></li>`;
//       results.insertAdjacentHTML ("beforeend", movieTag);
//     });

//   });


// button.addEventListener("click", (event) => {
//   event.currentTarget.innerText = "Hold Still..";
//   event.currentTarget.setAttribute("disabled", "Done");
//   // fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
//   //   .then(response => response.json())
//   //   .then((data) => {
//   //     console.log(data["Search"]);
//   //   });
// });


// const searchMovies = (query) => {
//   fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       data.Search.forEach((element) => {
//         const movieTag = `<li class="list-inline-item"><img src="${element.Poster}" alt=""><p>${element.Title}</p></li>`;
//         results.insertAdjacentHTML("beforeend", movieTag);
//       });
//     });
// };

// const form = document.querySelector("#search-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const input = event.currentTarget.querySelector("#search-input");
//   // search for the movies
//   searchMovies(input.value);
//   // clear the search entry
//   input.value = "";
// });


const signUp = (event) => {
  event.preventDefault();
  const emailValue = document.getElementById("email").value;
  const passwordValue = document.getElementById("password").value;
  fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: emailValue, password: passwordValue })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });
};

const form = document.querySelector("#form")
form.addEventListener("submit", signUp)
