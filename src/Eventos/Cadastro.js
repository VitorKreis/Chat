import { CadastrarUsuario, verificarUsuario } from "../DB/UsuarioDB.js";

export function RegistrarCadastro(socket, io){
    socket.on("cadastrar", async ({nome, senha}) => {

        const userExistente = (await verificarUsuario(nome)) !== null

        if(userExistente){
            socket.emit("userExistente", nome)
        }else{
            const user = await CadastrarUsuario(nome, senha);
            
            if(user.acknowledged){
                socket.emit("usuario_cadastrado", nome);
            }else{
                socket.emit("erro_cadastro");
            }
        }
        
    })
}