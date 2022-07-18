let exibeNumero = document.getElementById("exibeNumero")

let numero = 0

function adicionar() {
    numero--
    exibeNumero.innerHTML = numero
}

function subtrair() {
    numero++
    exibeNumero.innerHTML = numero
}