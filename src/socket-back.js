import { RegistraEventosDocumento } from "./Eventos/RegistraEventosDocumento.js";
import { RegistrarEventos } from "./Eventos/RegistrarEventos.js";
import io from "./server.js"


io.on('connection', async (socket) =>{

  RegistrarEventos(socket, io);
  RegistraEventosDocumento(socket, io);

})






