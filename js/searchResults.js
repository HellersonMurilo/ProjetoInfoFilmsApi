// searchResults.js
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const searchQuery = params.get("search");

  const apiKey = "596ccf1050c22a761282ea036f9eb6d8";
  const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZjY2YxMDUwYzIyYTc2MTI4MmVhMDM2ZjllYjZkOCIsInN1YiI6IjY1MjIwOGYyYzUwYWQyMDBhZDg0ZjAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EszvEiolp95keL1Y62nHD2i9Ih41mHNDb49HGwedOdc";

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&language=pt-BR`;


  const divPai = document.getElementById("paiBuscaFilmes");

  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((element) => {
        let filmesFilho = document.createElement("div");
        filmesFilho.className = "cardFilme";

        if (element.poster_path) {
          // Se poster_path não for nulo, exibir a imagem do filme
          filmesFilho.innerHTML = `
            <a href="/movie.html?id=${element.id}">
              <img src="https://image.tmdb.org/t/p/w200${element.poster_path}" alt="${element.title}">
            </a>
            <p>${element.title}</p>
            <p>⭐${element.vote_average.toFixed(1)}/10</p>
          `;
        } else {
          // Se poster_path for nulo, exibir uma imagem de fallback ou texto informativo
          filmesFilho.innerHTML = `
            <a href="/movie.html?id=${element.id}">
            <img src="Img/filme nao encontrado.svg" alt="">
            </a>
            <p>${element.title}</p>
            <p>⭐${element.vote_average.toFixed(1)}/10</p>
            <p>Não há imagem disponível</p>
          `;
        }

        divPai.appendChild(filmesFilho);
      });
    })
    .catch((error) => {
      console.error("Erro ao buscar filmes:", error);
    });
});
