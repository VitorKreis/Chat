import {scryptSync, randomBytes} from "crypto"

export function generateHasheSal(senha){
    const salSenha = randomBytes(16).toString("hex")
    const hashSenha = scryptSync(senha, salSenha, 64).toString("hex")
    
    
    return {salSenha, hashSenha}
}