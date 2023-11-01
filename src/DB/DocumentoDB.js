import {documentosColecao} from "./ConnectionDB.js"


export function addDocumento(nome){
    const documento = documentosColecao.insertOne({
        nome,
        texto : ""
    })


    return documento;
} 

export function listarDocumentos(){
    const lista = documentosColecao.find().toArray();
    
    return lista;
}

export function encontrarDocumento(nome){
    const documento = documentosColecao.findOne({ nome })
    return documento;
}

export function AtualizaDocumento(nome, texto){
    const documentoAtualizado = documentosColecao.updateOne({
        nome
    },{
        $set: { 
            texto
        }
    })

    return documentoAtualizado;
}


export function excluirDocumento(nome){
    const documentoExcluido = documentosColecao.deleteOne({nome})

    return documentoExcluido;
}