const socket = io()

export function EmitirCadastro(dados){
    socket.emit("cadastrar", dados);
}

socket.on("userExistente", (nome) => alert(`Usuario ${nome} ja existente!`) )

socket.on("usuario_cadastrado", (nome) => alert(`Usuario ${nome} cadastrado com sucesso!!`))

socket.on("erro_cadastro", () => alert("Ocorreu um erro ao cadastrar o usuario!!"))

