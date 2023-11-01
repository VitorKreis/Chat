export function RegistrarCadastro(socket, io){
    socket.on("cadastrar", ({nome, senha}) =>{
        console.log(nome, senha);
    })
}