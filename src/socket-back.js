import { RegistrarCadastro } from "./Eventos/Cadastro.js";
import { AutenticarLogin } from "./Eventos/Login.js";
import { RegistraEventosDocumento } from "./Eventos/Documento.js";
import { RegistrarEventos } from "./Eventos/Inicio.js";
import io from "./server.js"


io.on('connection', (socket) =>{

  RegistrarCadastro(socket, io);
  AutenticarLogin(socket, io);
  RegistrarEventos(socket, io);
  RegistraEventosDocumento(socket, io);

})






