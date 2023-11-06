const Conexao = [];


export function adicionarConexao(conexao){
    Conexao.push({nomeDocumento: conexao.nomeDocumento, nomeUsuario: conexao.nomeUsuario})

}


export function obterConexoes(nomeDocumento){
    return Conexao
    .filter((conexao) => conexao.nomeDocumento === nomeDocumento)
    .map((conexao) => conexao.nomeUsuario);
}