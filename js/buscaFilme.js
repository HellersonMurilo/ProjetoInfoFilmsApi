const btnBusca = document.getElementById("botaoPesquisa");

btnBusca.addEventListener("click", () => {
  var campoBusca = document.getElementById("campoBusca").value;
  if (campoBusca.trim() === "") {
    alert("Favor inserir o nome do filme");
  } else {
    window.location.href = `buscaFilme.html?search=${encodeURIComponent(
      campoBusca
    )}`;
  }
});
