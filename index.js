//chaves de acesso
const apiKey = "596ccf1050c22a761282ea036f9eb6d8";
const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZjY2YxMDUwYzIyYTc2MTI4MmVhMDM2ZjllYjZkOCIsInN1YiI6IjY1MjIwOGYyYzUwYWQyMDBhZDg0ZjAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EszvEiolp95keL1Y62nHD2i9Ih41mHNDb49HGwedOdc";

//url do tendencias
var urlTendencias =
  "https://api.themoviedb.org/3/trending/movie/day?language=pt-BR";

//metodos para parametros no fetch
var options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZjY2YxMDUwYzIyYTc2MTI4MmVhMDM2ZjllYjZkOCIsInN1YiI6IjY1MjIwOGYyYzUwYWQyMDBhZDg0ZjAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EszvEiolp95keL1Y62nHD2i9Ih41mHNDb49HGwedOdc",
  },
};

//fetch para obter os objetos da Url
fetch(urlTendencias, options)
  .then((response) => response.json())
  .then((response) => showInfo(response))
  .catch((err) => console.error(err));

//função que realizar o printar os resultados
const containerPai = document.getElementById("pai");

function showInfo(response) {
  response.results.slice(0, 10).forEach((element) => {
    let cards = document.createElement("div");
    const formatoVoto = element.vote_average.toFixed(1);
    cards.innerHTML = `
        <div class="imagem" id="card1">
            <a href="/movie.html?id=${element.id}" id="${element.id}"><img src="https://image.tmdb.org/t/p/w200${element.poster_path}" alt="" loading="eager"></a>
            <p>${element.title}</p>
            <p>⭐${formatoVoto}/10</p>
        </div>
        `;
    containerPai.appendChild(cards);
  });
}

// Celebridades
var listaCelebridades = [90633, 18897, 2888, 19292, 53256];

// URL base para a API do TMDb
var baseUrl = "https://api.themoviedb.org/3/";

// URL para as fotos das celebridades
var urlImgCelebridades = "https://image.tmdb.org/t/p/w200";

//obtendo a div pai
var cardCelebridades = document.getElementById("celebridadesPai");

listaCelebridades.forEach((idCelebridade) => {
  var urlCelebridades = `${baseUrl}person/${idCelebridade}?api_key=${apiKey}&language=pt-BR`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZjY2YxMDUwYzIyYTc2MTI8mmVhMDM2ZjllYjZkOCIsInN1YiI6IjY1MjIwOGYyYzUwYWQyMDBhZDg0ZjAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EszvEiolp95keL1Y62nHD2i9Ih41mHNDb49HGwedOdc",
    },
  };

  var listaDados = [];

  fetch(urlCelebridades, options)
    .then((response) => response.json())
    .then((resposta) => showCelebri(resposta))
    .catch((err) => console.log(err));
  function showCelebri(resposta) {
    listaDados.push(resposta);

    listaDados.forEach((element) => {
      let delicio = document.createElement("div");
      delicio.innerHTML = `
            <div class="cards">
            <a href="/infoCelebridades.html?id=${element.id}"><img src="${
        urlImgCelebridades + element.profile_path
      }" alt="" width="100" height="150" loading="eager"></a>
                <p>${element.name}</p>
            </div>
            `;
      cardCelebridades.appendChild(delicio);
    });
  }
});
