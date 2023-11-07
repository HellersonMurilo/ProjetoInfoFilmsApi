//chaves de acesso
const apiKey = "596ccf1050c22a761282ea036f9eb6d8"
const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZjY2YxMDUwYzIyYTc2MTI4MmVhMDM2ZjllYjZkOCIsInN1YiI6IjY1MjIwOGYyYzUwYWQyMDBhZDg0ZjAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EszvEiolp95keL1Y62nHD2i9Ih41mHNDb49HGwedOdc"

//url das series populares
var urlPopularSeries = "https://api.themoviedb.org/3/tv/top_rated?language=pt-BR"

//metodos para parametros no fetch
var options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZjY2YxMDUwYzIyYTc2MTI4MmVhMDM2ZjllYjZkOCIsInN1YiI6IjY1MjIwOGYyYzUwYWQyMDBhZDg0ZjAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EszvEiolp95keL1Y62nHD2i9Ih41mHNDb49HGwedOdc'
    }
};

//Automatizando os slides
let contador = 1;

document.getElementById('slide1').checked = true;

setInterval(function () {
    nextSlide();
}, 4000)

function nextSlide() {
    contador++;
    if (contador>3) {
        contador = 1;
    }

    document.getElementById('slide'+contador).checked = true;
}

//fecth novo
fetch(urlPopularSeries, options)
    .then(response => response.json())
    .then(response => showData(response))

const divPai = document.getElementById("paiPopular")

function showData(response) {
    console.log(response)
    response.results.forEach(element => {
        let postSerie = document.createElement('div')
        postSerie.innerHTML = `
        <div class="postSerie" id="post1">
        <a href="/infoSerie.html?id=${element.id}" id="${element.id}"><img src="https://image.tmdb.org/t/p/w200${element.poster_path}" alt="" loading="eager"></a>
            <p>${element.name}</p>
            <p>⭐${element.vote_average}</p>
        </div>
        `
        divPai.appendChild(postSerie)
    });
}