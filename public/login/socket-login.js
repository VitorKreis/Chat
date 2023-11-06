import { criarCookie } from "../utils/cookies.js";

const socket = io();

function emitirAutenticarUsuario(dados){
    socket.emit("autenticar_usuario", dados);
}

socket.on("usuario_incorreto", () => alert("Usuario incorreto, porfavor verificar!!"));

socket.on("autenticado_sucesso", (token) => {

    const tokenJWT = criarCookie("tokenJWT",token);

    alert("Login confirmado com sucesso!!");
    window.location.href = "/"
});

socket.on("autenticado_error", () => alert("Alguma informaçao incorreta, porfavor verificar!"));

export { emitirAutenticarUsuario }; 