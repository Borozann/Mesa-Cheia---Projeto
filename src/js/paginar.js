function paginar(id) {
  let ativoAtual = document.querySelector(".page-item.ativo");
  if (ativoAtual) ativoAtual.classList.remove("ativo");

  let novoAtivo = document.getElementById(id);
  if (novoAtivo) novoAtivo.classList.add("ativo");
}
