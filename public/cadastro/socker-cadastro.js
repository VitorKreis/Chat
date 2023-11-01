const socket = io()

export function EmitirCadastro(dados){
    socket.emit("cadastrar", dados);
}