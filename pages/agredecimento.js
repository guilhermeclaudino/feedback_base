function pagarNota() {
    let nota = localStorage.getItem("nota")

    let paragrafoNota = document.querySelector(".paragrafo_nota")

    paragrafoNota.innerHTML = `Vc selecionou $(nota de 5)`
}

pagarNota()