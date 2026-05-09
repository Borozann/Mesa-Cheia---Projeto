function paginar(id) {
  let ativoAtual = document.querySelector(".item.active");

  if (ativoAtual) {
    ativoAtual.classList.remove("active");
  }

  let novoAtivo = document.getElementById(id);

  if (novoAtivo) {
    novoAtivo.classList.add("active");
  }
}

window.paginar = paginar;
