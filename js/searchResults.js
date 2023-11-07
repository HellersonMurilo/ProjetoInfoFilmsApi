// searchResults.js
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const searchQuery = params.get("search");

  const apiKey = "596ccf1050c22a761282ea036f9eb6d8";
  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZjY2YxMDUwYzIyYTc2MTI4MmVhMDM2ZjllYjZkOCIsInN1YiI6IjY1MjIwOGYyYzUwYWQyMDBhZDg0ZjAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EszvEiolp95keL1Y62nHD2i9Ih41mHNDb49HGwedOdc";

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&language=pt-BR`;

  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const divPai = document.getElementById("paiBuscaFilmes");
      data.results.forEach((element) => {
        let filmesFilho = document.createElement("div");
        filmesFilho.className = "cardFilme";
        filmesFilho.innerHTML = `
          <a href="/movie.html?id=${element.id}">
            <img src="https://image.tmdb.org/t/p/w200${element.poster_path
          }" alt="${element.title}">
          </a>
          <p>${element.title}</p>
          <p>⭐${element.vote_average.toFixed(1)}/10</p>
        `;
        divPai.appendChild(filmesFilho);
      });
    })
    .catch((error) => {
      console.error("Erro ao buscar filmes:", error);
    });
});
