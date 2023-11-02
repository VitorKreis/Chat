import {scryptSync, timingSafeEqual} from "crypto"

export function AutenticarUsuario(senha, usuario){

    const testeHash = scryptSync(senha, usuario.salSenha, 64);

    const hashReal = Buffer.from(usuario.hashSenha, "hex");
    
    const autenticar = timingSafeEqual(testeHash, hashReal);

    return autenticar;

}