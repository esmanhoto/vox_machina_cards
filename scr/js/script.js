const listaCharacters = document.querySelectorAll(".character");
const characterCard = document.querySelectorAll(".cartao-character");

listaCharacters.forEach((character) => {
  character.addEventListener("click", () => {
    const cartaoCharacterAberto = document.querySelector(".aberto");
    cartaoCharacterAberto.classList.remove("aberto");
    const listaCharacterAtiva = document.querySelector(".ativo");
    listaCharacterAtiva.classList.remove("ativo");

    const idCharacterSelecionado = character.attributes.id.value;

    const cartaoCharacterParaAbrir = document.getElementById(
      "cartao-" + idCharacterSelecionado
    );
    cartaoCharacterParaAbrir.classList.add("aberto");

    const listaCharacterParaAtivar = document.getElementById(
      idCharacterSelecionado
    );
    listaCharacterParaAtivar.classList.add("ativo");
  });
});
