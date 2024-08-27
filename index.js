const http = require("http");
const express = require('express');
const path = require("path");
const {Server} = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection",(socket)=>{
    socket.on("user-message",(message)=>{
        console.log(message)
        io.emit("message",message)
    })
})

app.use(express.static(path.resolve("./public")));


app.get('/', (req, res) => res.sendFile("/public/index.html"));

server.listen(9000,() => console.log("Server running in 9000"));