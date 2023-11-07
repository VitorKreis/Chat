import { AtualizaDocumento, encontrarDocumento, excluirDocumento,  } from "../DB/DocumentoDB.js";
import { adicionarConexao, encontrarConexao, obterConexoes, removerConexao } from "../util/ConexaoDocumento.js";

export function RegistraEventosDocumento(socket, io){

    socket.on("documento", async ({nomeDocumento, nomeUsuario}, devolverTexto) => {


        const documento = await encontrarDocumento(nomeDocumento);
        
        if(documento){

            const conexao = encontrarConexao(nomeDocumento, nomeUsuario)

            if(!conexao){

                socket.data = {
                    connectado: true
                }

                socket.join(nomeDocumento)

                adicionarConexao({nomeDocumento, nomeUsuario});
    
                const usuariosNoDocumento = obterConexoes(nomeDocumento);
    
                io.to(nomeDocumento).emit("usuarios_no_documento", usuariosNoDocumento);
                
                devolverTexto(documento.texto);
    
            }else{
                socket.emit("UsuarioConnectado")
            }
            
        }

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

        socket.on("disconnect", () => {
            if(socket.data.connectado){
                removerConexao(nomeDocumento, nomeUsuario);

                const usuariosNoDocumento = obterConexoes(nomeDocumento);
    
                io.to(nomeDocumento).emit("usuarios_no_documento", usuariosNoDocumento);
            }
            
        })

      })
    

      
}