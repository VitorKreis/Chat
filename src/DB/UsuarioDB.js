import { generateHasheSal } from "../util/generateHasheSal.js";
import {usuariosColecao} from "./ConnectionDB.js"



export function verificarUsuario(nome) {
    const resultado = usuariosColecao.findOne({nome})

    return resultado;
}

export function CadastrarUsuario(nome, senha) {

    const {hashSenha, salSenha} = generateHasheSal(senha)
    const usuario = usuariosColecao.insertOne({nome, hashSenha, salSenha})
    
    return usuario;
    
}