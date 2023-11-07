const url = window.location.href

var id = url.split('?id=')[1]

const apiKey = "596ccf1050c22a761282ea036f9eb6d8"

var options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZjY2YxMDUwYzIyYTc2MTI4MmVhMDM2ZjllYjZkOCIsInN1YiI6IjY1MjIwOGYyYzUwYWQyMDBhZDg0ZjAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EszvEiolp95keL1Y62nHD2i9Ih41mHNDb49HGwedOdc'
  }
};

var urlSerie = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=pt-BR`
console.log(urlSerie)

//obtendo a div Pai para o appendChild
var ludimilo = document.getElementById('amazonio')

//fetch para obter os objetos da Url
fetch(urlSerie, options)
  .then(response => response.json())
  .then(response => showInfoFilm(response))
  .catch(err => console.log(err));

function showInfoFilm(response) {
     let infoSeries = document.createElement('div')
    infoSeries.innerHTML = `
      <div class="corpoPrincipal" id="corpoPrincipal">
      <img src="https://image.tmdb.org/t/p/w300${response.poster_path}" alt="" loading="eager">
      <div class="infoCards" id="infoCards">
          <h1>${response.name}</h1>
          <span>N° de Episódios: ${response.number_of_episodes} ⚪ Temporadas: ${response.number_of_seasons}</span>
          <p>${response.genres.map(element => element.name).join(', ')}</p>
          <i class="tagLine">'${response.tagline}'</i>
          <h6>SINOPSE</h6>
          <p>${response.overview}</p>
      </div>
  </div>
      `
    
      ludimilo.appendChild(infoSeries)
}

