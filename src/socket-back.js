import { AtualizaDocumento, addDocumento, encontrarDocumento, excluirDocumento, listarDocumentos } from "./DocumentoDb.js";
import io from "./server.js"


io.on('connection', async (socket) =>{

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

    socket.on("listaDocumento", async (lista) =>{
      const listaDocumento = await listarDocumentos()
      lista(listaDocumento);
    })

    
    socket.on("documento", async (nomeDocumento, devolverTexto) => {
        socket.join(nomeDocumento)

        const documento = await encontrarDocumento(nomeDocumento);
        if(documento){
            devolverTexto(documento.texto);
        }
      })
    
    socket.on("text_editor", async (texto, nomeDocumento) => {

        const documentoAtualizado = await AtualizaDocumento(nomeDocumento, texto);

        if(documentoAtualizado.modifiedCount){
            socket.to(nomeDocumento).emit("texto_editor_cliente", texto)
        }
    })

    socket.on("excluir_documento", async (nome) => {
        const resultado = await excluirDocumento(nome)

        if(resultado.deletedCount){
          io.emit("excluir_documento_sucesso", nome)
        }
    })

})






