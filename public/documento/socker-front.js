import { ObterCookie } from "../utils/cookies.js";
import { AutenticarUsuario, MessagemExcluir, WriteTexto, atualizarInterfaceUsuarios} from "./documento.js";

const socket = io("/usuarios", {
    auth:{
        token: ObterCookie("tokenJWT"),
    },
});


socket.on("autenticaçao_usuario", AutenticarUsuario)


socket.on("connect_error", (error) => {
    alert(error)
    window.location.href = "/login/index.html";
})

socket.on("UsuarioConnectado", ()=> {
    alert("Usuario ja connectado ao um documento");
    window.location.href = "/";
})

socket.on("usuarios_no_documento", atualizarInterfaceUsuarios);


export function EmitirDocumento(Dados){
    socket.emit("documento", Dados, (texto) => {
        WriteTexto(texto)
    })
}

socket.on("texto_editor_cliente", (texto) =>{
    
    WriteTexto(texto)
})




export function EmitTexto(texto, nomeDocumento){
    socket.emit("text_editor", texto, nomeDocumento);

}

export function emitir_ExcluirDocumento(nome){

    socket.emit("excluir_documento", nome)
}


socket.on("excluir_documento_sucesso", (nomeDocumento) => {
    MessagemExcluir(nomeDocumento)
})

