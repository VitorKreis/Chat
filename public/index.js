import { adicionarDocumento } from  "./socker-front-index.js"
const listaDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento")
const input = document.getElementById("input-documento")

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

