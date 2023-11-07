const ConexaoDocumento = [];



export function encontrarConexao(nomeDocumento, nomeUsuario){
    return ConexaoDocumento.find((conexao) =>{
        return conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUsuario
    })
}


export function adicionarConexao(conexao){
    ConexaoDocumento.push(conexao)
}


export function obterConexoes(nomeDocumento){
    return ConexaoDocumento
    .filter((conexao) => conexao.nomeDocumento === nomeDocumento)
    .map((conexao) => conexao.nomeUsuario);
}

export function removerConexao(nomeDocumento, nomeUsuario){
    const indece = ConexaoDocumento.findIndex((conexao) =>{
        return conexao.nomeDocumento === nomeDocumento && conexao.nomeUsuario === nomeUsuario
    })

    ConexaoDocumento.splice(indece, 1)
}