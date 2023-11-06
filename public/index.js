import { adicionarDocumento } from  "./socker-front-index.js"
import { ObterCookie, removerCookies } from "./utils/cookies.js";
const listaDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const input = document.getElementById("input-documento");
const logout = document.getElementById("botao-logout");

const tokenJWT = ObterCookie("tokenJWT");

console.log(tokenJWT);


logout.addEventListener("click", () =>{
    removerCookies("tokenJWT")
    alert("Usuario sair com sucesso!");
    window.location.href = "/login/index.html";
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    adicionarDocumento(input.value)
})

export function InserirDocumento(nomeDocumento) {
    listaDocumentos.innerHTML += `
    <a href="./documento/documento.html?nome=${nomeDocumento}" 
    class="list-group-item list-group-item-action" id="documento-${nomeDocumento}">
        ${nomeDocumento}
    </a>
   `
}

export function ExcluirDocumento(nome){
    const documeto = document.getElementById(`documento-${nome}`)

    listaDocumentos.removeChild(documeto)
}

