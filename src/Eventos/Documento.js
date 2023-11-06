import { AtualizaDocumento, encontrarDocumento, excluirDocumento,  } from "../DB/DocumentoDB.js";
import { adicionarConexao, obterConexoes } from "../util/ConexaoDocumento.js";

export function RegistraEventosDocumento(socket, io){

    socket.on("documento", async ({nomeDocumento, nomeUsuario}, devolverTexto) => {


        const documento = await encontrarDocumento(nomeDocumento);
        
        if(documento){
            socket.join(nomeDocumento)

            adicionarConexao({nomeDocumento, nomeUsuario});

            const usuariosNoDocumento = obterConexoes(nomeDocumento);


            io.to(nomeDocumento).emit("usuarios_no_documento", usuariosNoDocumento);
            
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