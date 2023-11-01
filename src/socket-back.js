import { RegistrarCadastro } from "./Eventos/Cadastro.js";
import { RegistraEventosDocumento } from "./Eventos/Documento.js";
import { RegistrarEventos } from "./Eventos/Inicio.js";
import io from "./server.js"


io.on('connection', async (socket) =>{

  RegistrarEventos(socket, io);
  RegistraEventosDocumento(socket, io);
  RegistrarCadastro(socket, io);

})






