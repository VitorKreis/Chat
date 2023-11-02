import { verificarUsuario } from "../DB/UsuarioDB.js";
import { AutenticarUsuario } from "../util/AutenticarUsuario.js";
import { gerarJwt } from "../util/GerarJWT.js";

export function AutenticarLogin(socket, io) { 
    socket.on("autenticar_usuario", async ({ nome, senha }) => {
        const usuario = await verificarUsuario(nome)

        if(usuario){
            const autenticado = AutenticarUsuario(senha, usuario);

            if(autenticado){
                const token = gerarJwt({nomeUsuario : nome})
                socket.emit("autenticado_sucesso", token)
            }else{
                socket.emit("autenticado_error")
            }
        }else{
            socket.emit("usuario_incorreto")
        }
        
        
    });
}