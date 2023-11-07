import { EmitTexto, EmitirDocumento, emitir_ExcluirDocumento } from "../documento/socker-front.js";

const parametros = new URLSearchParams(window.location.search);

const nomeDocumento = parametros.get("nome");

const text_editor = document.getElementById("editor-texto");
const Documento = document.getElementById("titulo-documento");
const botao_excluir =  document.getElementById("excluir-documento")
const listaUsuariosConectados = document.getElementById("usuarios-conectados");

Documento.textContent = nomeDocumento || "Documento sem Nome";

export function AutenticarUsuario(dados){
    EmitirDocumento({nomeDocumento, nomeUsuario: dados.nomeUsuario});
}

export function atualizarInterfaceUsuarios(usuariosNoDocumento) {
    listaUsuariosConectados.innerHTML = "";

    usuariosNoDocumento.forEach((usuario) => {
      listaUsuariosConectados.innerHTML += `
        <li class="list-group-item">${usuario}</li>
      `;
    });
  }

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

