import { EmitTexto, EmitirDocumento, emitir_ExcluirDocumento } from "../socker-front-index.js";

const parametros = new URLSearchParams(window.location.search);

const nomeDocumento = parametros.get("nome");

const text_editor = document.getElementById("editor-texto");
const Documento = document.getElementById("titulo-documento");
const botao_excluir =  document.getElementById("excluir-documento")

Documento.textContent = nomeDocumento || "Documento sem Nome";

EmitirDocumento(nomeDocumento);

export function WriteTexto(texto){
    text_editor.value = texto;
}

text_editor.addEventListener("keyup", () => {
    EmitTexto(text_editor.value, nomeDocumento);
})


botao_excluir.addEventListener("click", () =>{
    emitir_ExcluirDocumento(nomeDocumento)
})

export function MessagemExcluir(nome){
    if(nome === nomeDocumento){
        alert(`Documento ${nome} excluido!!`)
        window.location.href = "/"
    }
}

