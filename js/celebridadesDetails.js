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

var urlCelebridades = `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=pt-BR
`


console.log(urlCelebridades)

//obtendo a div Pai para o appendChild
var ludimilo = document.getElementById('amazonio')

//fetch para obter os objetos da Url
fetch(urlCelebridades, options)
    .then(response => response.json())
    .then(response => showCelebridade(response))
    .catch(err => console.log(err));


function showCelebridade(response) {
    //obtendo a data
    var meses = [
        "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
        "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ];
    var data = new Date();
    var dia = response.birthday.split('-'); // Obtém o dia do mês criando uma lista
    var diaNumero = dia[2]; // Obtém o dia
    var mesNumero = dia[1]; // Obtém o mês
    var ano = dia[0]; // Obtém o ano
    var mesAtual = meses[mesNumero - 1]; // Obtém o mês atual por extenso

    let infoCelebridades = document.createElement('div')

    infoCelebridades.innerHTML = `
      <div class="corpoPrincipal" id="corpoPrincipal">
      <img src="https://image.tmdb.org/t/p/w300${response.profile_path}" alt="">
      <div class="infoCards" id="infoCards">
          <h1>${response.name}</h1>
          <span>Nascimento: ${diaNumero + " " + mesAtual + " " + ano} ⚪ Falecimento:${response.deathday == null ? " - " : response.deathday}</span>
          <p>Departamento: ${response.known_for_department}</p>
          <i class="tagLine">Local de Nascimento: ${response.place_of_birth}</i>
          <h6>BIOGRAFIA</h6>
          <p>${response.biography}</p>
      </div>
      
  </div>
      `

    ludimilo.appendChild(infoCelebridades)
}

//obtendo a div Pai para o appendChild
var calabreso = document.getElementById('matoAtlatico')

var urlFilmesCelebridades = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}&language=pt-BR`

//fetch para os filmes das celebridades
fetch(urlFilmesCelebridades, options)
    .then(response => response.json())
    .then(response => showFilmeCelebridades(response))
    .catch(err => console.log(err));


function showFilmeCelebridades(response) {
    response.cast.splice(0, 5).forEach(element => {
        let info = document.createElement('div');
        info.innerHTML = `
        <div class="infoFilmesCelebridades">
            <a href="/movie.html?id=${element.id}"><img src="https://image.tmdb.org/t/p/w200${element.backdrop_path == null ? "" : element.backdrop_path}" alt="" loading="eager"></a>
            <p>${element.backdrop_path == null ? "" : element.title}</p>
        </div>
        `
        calabreso.appendChild(info)
    });
}