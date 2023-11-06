import  jwt from "jsonwebtoken";

export function autenticadorLogin(socket , next){
    const token = socket.handshake.auth.token;

    try {
        const Dadousuario = jwt.verify(token, process.env.JWT_SEGREDO)
        socket.emit("autenticaçao_usuario", Dadousuario)
         next()
    } catch (error) {
        next(error)
    }
}