import express from "express"
import url from "url"
import path from "path";
import {Server} from "socket.io"
import http from "http"




const app = express();

const pastaAtual  = url.fileURLToPath(import.meta.url);
const pastaPublic = path.join(pastaAtual, "../../", "public")

import "./DB/ConnectionDB.js"

const serverHttp = http.createServer(app);

app.use(express.static(pastaPublic))

const io = new Server(serverHttp)

const PORT  = process.env.PORT || 3030;
serverHttp.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`)
})


export default io;
