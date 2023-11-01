import { AtualizaDocumento, encontrarDocumento, excluirDocumento,  } from "../DB/DocumentoDB.js";

export function RegistraEventosDocumento(socket, io){

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
}