import { ObterCookie } from "../utils/cookies.js";
import { MessagemExcluir, WriteTexto } from "./documento.js";

const socket = io("/usuarios", {
    auth:{
        token: ObterCookie("tokenJWT"),
    },
});

socket.on("connect_error", (error) => {
    alert(error)
    window.location.href = "/login/index.html";
})

socket.on("texto_editor_cliente", (texto) =>{
    WriteTexto(texto)
})

export function EmitirDocumento(nome){
    socket.emit("documento", nome, (texto) => {
        WriteTexto(texto)
    })
}

export function EmitTexto(texto, nomeDocumento){
    socket.emit("text_editor", texto, nomeDocumento);

}

export function emitir_ExcluirDocumento(nome){

    socket.emit("excluir_documento", nome)
}


socket.on("excluir_documento_sucesso", (nomeDocumento) => {
    MessagemExcluir(nomeDocumento)
})

