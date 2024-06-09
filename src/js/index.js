// const = cria variavel sem poder reatribuir.
// let = cria uma variavel que pode ser reatribuida depois alterando o valor dela.


const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function () {
    const ultimoCartao = cartaoAtual === cartoes.length - 1
    if (ultimoCartao) return;

    enconderCartoeSelecionado();

    cartaoAtual++;
    mostrarCartao();

})


btnVoltar.addEventListener("click", function () {
    const primeiroCartao = cartaoAtual === 0
    if (primeiroCartao) return;
    enconderCartoeSelecionado();

    cartaoAtual--;
    mostrarCartao();

})
function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function enconderCartoeSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

