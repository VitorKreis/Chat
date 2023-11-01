import { addDocumento, encontrarDocumento, listarDocumentos } from "../DB/DocumentoDB.js";

export function RegistrarEventos(socket, io){


    socket.on("listaDocumento", async (lista) =>{
        const listaDocumento = await listarDocumentos()
        lista(listaDocumento);
      })

    socket.on("adicionarDocumento",async (nome)=>{
    
        const documentoExitente = (await encontrarDocumento(nome)) !== null
    
        if(documentoExitente){
          socket.emit("documento_existente", nome)
        }else{
        const resultado = await addDocumento(nome)
          if(resultado.acknowledged){
            io.emit("adioncar_documento", nome)
          }
        } 
      })
}