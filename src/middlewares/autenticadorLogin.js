import  jwt from "jsonwebtoken";

export function autenticadorLogin(socket , next){
    const token = socket.handshake.auth.token;

    try {
        jwt.verify(token, process.env.JWT_SEGREDO)

         next()
    } catch (error) {
        next(error)
    }
}