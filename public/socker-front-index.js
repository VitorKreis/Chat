import { ExcluirDocumento, InserirDocumento } from "./index.js";

const socket = io();

export function adicionarDocumento(nome){
    socket.emit("adicionarDocumento", nome);
}

socket.emit("listaDocumento", (lista) => {
    lista.forEach((list) =>{
        InserirDocumento(list.nome)
    })
});

socket.on("documento_existente", (nome) =>{
    alert(`Documento ${nome}, ja exitente!`)
})


socket.on("adioncar_documento", (nome) => {
    InserirDocumento(nome)
})


socket.on("excluir_documento_sucesso", (nome) =>{
    ExcluirDocumento(nome)
})