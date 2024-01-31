// $(".search-button").on("click", function () {
//   $.ajax({
//     url:
//       "http://www.omdbapi.com/?apikey=74fd9f5a&s=" + $(".input-keyword").val(),
//     success: (results) => {
//       const movies = results.Search;
//       let cards = "";
//       movies.forEach((m) => {
//         cards += showCards(m);
//       });
//       $(".movie-container").html(cards);

//       // Ketika tombol detail di klik
//       $(".modal-detail-button").on("click", function () {
//         $.ajax({
//           url:
//             "http://www.omdbapi.com/?apikey=74fd9f5a&i=" +
//             $(this).data("imdbid"),
//           success: (m) => {
//             const movieDetail = showMovieDetail(m);
//             $(".modal-body").html(movieDetail);
//           },
//           error: (e) => {
//             console.log(e.responseText);
//           },
//         });
//       });
//     },
//     error: (e) => {
//       console.log(e.responseText);
//     },
//   });
// });

// Fetch
// const searchButton = document.querySelector(".search-button");
// searchButton.addEventListener("click", function () {
//   // ketika tombol search di klik
//   const keyword = document.querySelector(".input-keyword").value;
//   fetch("http://www.omdbapi.com/?apikey=74fd9f5a&s=" + keyword)
//     .then((response) => response.json())
//     .then((result) => {
//       const movies = result.Search;
//       let cards = "";
//       movies.forEach((m) => {
//         cards += showCards(m);
//       });
//       const movieContainer = document.querySelector(".movie-container");
//       movieContainer.innerHTML = cards;

//       // Ketika tombol detail di klik
//       const detailButton = document.querySelectorAll(".modal-detail-button");
//       detailButton.forEach((btn) => {
//         btn.addEventListener("click", function () {
//           const imdbId = this.dataset.imdbid;
//           // console.log(imdbId);
//           fetch("http://www.omdbapi.com/?apikey=74fd9f5a&i=" + imdbId)
//             .then((response) => response.json())
//             .then((result) => {
//               // console.log(result);
//               let detailCards = showMovieDetail(result);
//               const modalBody = document.querySelector(".modal-body");
//               modalBody.innerHTML = detailCards;
//             });
//         });
//       });
//     });
// });

// Fetch refactor (Async Await)
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  const inputKeyword = document.querySelector(".input-keyword").value;
  const movies = await getMovies(inputKeyword);
  // console.log(movies);
  moviesUI(movies);
});

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=74fd9f5a&s=" + keyword)
    .then((response) => response.json())
    .then((m) => m.Search);
}

function moviesUI(movies) {
  let cards = "";
  movies.forEach((m) => {
    cards += showCards(m);
  });
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

// Event binding | Kalau tombol show detail di klik
document.addEventListener("click", async function (e) {
  // console.log(e.target);
  if (e.target.classList.contains("modal-detail-button")) {
    const imdbId = e.target.dataset.imdbid;
    const movie = await getMovieDetail(imdbId);
    // console.log(movie);
    movieUIDetail(movie);
  }
});

function getMovieDetail(imdbId) {
  return fetch("http://www.omdbapi.com/?apikey=74fd9f5a&i=" + imdbId)
    .then((response) => response.json())
    .then((m) => m);
}

function movieUIDetail(m) {
  let detailCards = showMovieDetail(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = detailCards;
}

function showCards(m) {
  return `<div class="col-md-4 my-3">
            <div class="card">
              <img src="${m.Poster}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
              </div>
            </div>
          </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid" />
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item">${m.Title} (${m.Year})</li>
                  <li class="list-group-item">
                    <strong>Director : </strong>${m.Director}
                  </li>
                  <li class="list-group-item">
                    <strong>Actors : </strong> ${m.Actors}
                  </li>
                  <li class="list-group-item">
                    <strong>Writer : </strong> ${m.Writer}
                  </li>
                  <li class="list-group-item">
                    <strong>Plot : </strong> <br />
                    ${m.Plot}
                  </li>
                </ul>
              </div>
            </div>
          </div>`;
}
