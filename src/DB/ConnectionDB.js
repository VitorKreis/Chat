import {MongoClient} from "mongodb"


const cliente = new MongoClient("mongodb+srv://VitorRichter:Vitor.4209@meucluster.t3qmyyy.mongodb.net/?retryWrites=true&w=majority")

let documentosColecao, usuariosColecao;

try {
  await cliente.connect();

  const db = cliente.db("Alura");
  
  documentosColecao = db.collection("websockets");
  usuariosColecao = db.collection('usuarios')

  console.log("Conectado ao banco de dados com sucesso!");

} catch (erro) {
  console.log(erro);
}

export { documentosColecao, usuariosColecao };