
import "dotenv/config.js";

import { RegistrarCadastro } from "./Eventos/Cadastro.js";
import { AutenticarLogin } from "./Eventos/Login.js";
import { RegistraEventosDocumento } from "./Eventos/Documento.js";
import { RegistrarEventos } from "./Eventos/Inicio.js";
import io from "./server.js"
import { autenticadorLogin } from "./middlewares/autenticadorLogin.js";

const nspUsuarios = io.of("/usuarios");

nspUsuarios.use(autenticadorLogin);

nspUsuarios.on("connection", (socket) =>{
  RegistrarEventos(socket, nspUsuarios);
  RegistraEventosDocumento(socket, nspUsuarios);
})

io.of("/").on('connection', (socket) =>{
  RegistrarCadastro(socket, io);
  AutenticarLogin(socket, io);
})






