//chaves de acesso
const apiKey = "596ccf1050c22a761282ea036f9eb6d8"
const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZjY2YxMDUwYzIyYTc2MTI4MmVhMDM2ZjllYjZkOCIsInN1YiI6IjY1MjIwOGYyYzUwYWQyMDBhZDg0ZjAzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EszvEiolp95keL1Y62nHD2i9Ih41mHNDb49HGwedOdc"

//url dos filmes mais votados
var urlFilmesTopRated = "https://api.themoviedb.org/3/movie/top_rated?language=pt-BR"

var urlFilmesPopular = "https://api.themoviedb.org/3/movie/popular?language=pt-BR"

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


//fetch Popular
fetch(urlFilmesPopular, options)
.then(result => result.json())
.then(result => showPopular(result))

const paiFilmesPopular = document.getElementById("paiFilmesPopular")

function showPopular(result) {
    result.results.forEach(element => {
        let postFilme = document.createElement('div')
        postFilme.innerHTML = `
        <div class="cardFilme" id="card1">
        
            <a href="/movie.html?id=${element.id}" id="${element.id}"><img src="https://image.tmdb.org/t/p/w200${element.poster_path}" alt=""></a>
            <p>${element.title}</p>
            <p>⭐${element.vote_average.toFixed(1)}/10</p>
        </div>
        `
        paiFilmesPopular.appendChild(postFilme)
    });
}


//fetch Top Rated
fetch(urlFilmesTopRated, options)
.then(response => response.json())
.then(response => showTop(response))

const paiFilmestop = document.getElementById("paiFilmesTop")

function showTop(response) {
    response.results.forEach(element => {
        let cardFilme = document.createElement('div')
        cardFilme.innerHTML = `
        <div class="cardFilme" id="card1">
            <a href="/movie.html?id=${element.id}" id="${element.id}"><img src="https://image.tmdb.org/t/p/w200${element.poster_path}" alt=""></a>
            <p>${element.title}</p>
            <p>⭐${element.vote_average.toFixed(1)}/10</p>
        </div>
        `
        paiFilmestop.appendChild(cardFilme)
    });
}