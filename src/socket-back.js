import { RegistrarCadastro } from "./Eventos/Cadastro.js";
import { AutenticarLogin } from "./Eventos/Login.js";
import { RegistraEventosDocumento } from "./Eventos/Documento.js";
import { RegistrarEventos } from "./Eventos/Inicio.js";
import io from "./server.js"
import { autenticadorLogin } from "./middlewares/autenticadorLogin.js";

import "dotenv/config.js";



io.of("/usuarios").use(autenticadorLogin);

io.of("/usuarios").on("connection", (socket) =>{
  RegistrarEventos(socket, io);
  RegistraEventosDocumento(socket, io);
})

io.of("/").on('connection', (socket) =>{
  RegistrarCadastro(socket, io);
  AutenticarLogin(socket, io);
})






