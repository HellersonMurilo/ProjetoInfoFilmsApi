const containerPai = document.getElementById("pai");
const voltar = document.getElementById("prev");
const avancar = document.getElementById("next");
let filme = 0;
let response = null; // Armazena a resposta da API

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWZmMWI2MzFiYTlmYmUxYjRjMjViZjE4NGMzZjZjNSIsInN1YiI6IjY1MjU0OGY3ODNlZTY3MDBlNDM4Y2EwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EUdv7UmIwtjWTM9FxR6k32rqLMMx1kmCeGXtj1ynfkQ'
    }
  };

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then(data => {
    response = data;
    showSlide();
  })
  .catch(err => console.error(err));

function showSlide() {
  if (response && response.results && response.results.length > 0) {
    const movie = response.results[filme];
    const title = movie.title;
    const img = movie.backdrop_path;
    const genre = movie.genre_ids[0];
    const overView = movie.overview;
    const genresString = getGenresString(movie.genre_ids);
    console.log(movie)

    let cards = document.createElement('div');
    cards.className = "carousel-item active d-block w-500"
    cards.innerHTML = `
      <div class="carousel-item active" id="card1" >
        <h1 class="banner-title">${title}</h1>
        <p>${genresString}</p>
      </div>
    `;
    cards.style = `background-image:url("https://image.tmdb.org/t/p/w500${img}");`
    containerPai.innerHTML = '';
    containerPai.appendChild(cards);
    const bottom = document.createElement("div")
  } else {
    console.error('Nenhum resultado encontrado na resposta da API');
  }

}

voltar.addEventListener('click', () => {
  if (filme > 0) {
    filme -= 1;
    showSlide();
  }
});

avancar.addEventListener('click', () => {
  if (filme < response.results.length - 1) {
    filme += 1;
    showSlide();
  }
});

const genreMap = {
  28: "Ação",
  12: "Aventura",
  16: "Animação",
  35: "Comédia",
  80: "Crime",
  99: "Documentário",
  18: "Drama",
  10751: "Família",
  14: "Fantasia",
  36: "História",
  27: "Terror",
  10402: "Música",
  9648: "Romance",
  10749: "Cinema de Gênero",
  878: "Ficção científica",
  10752: "Cinema TV",
  53: "Thriller",
  10752: "Guerra",
  37: "Faroeste"
}

function getGenresString(genreIds) {
  const genreNames = genreIds.map(genreId => genreMap[genreId]);
  return genreNames.join(', ');
}

