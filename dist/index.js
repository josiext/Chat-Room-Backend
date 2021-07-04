"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const config_1 = require("./config");
console.log(config_1.SYSTEM);
const httpServer = http_1.createServer();
const io = new socket_io_1.Server(httpServer);
const DEFAULT_USERNAME = "anonymous";
io.on("connection", (socket) => {
    console.log(`connect: ${socket.id}`);
    socket.username = DEFAULT_USERNAME;
    socket.broadcast.emit("user connected", socket.username);
    socket.on("disconnect", () => {
        console.log(`disconnect: ${socket.id}`);
    });
    socket.on("chat message", (content) => {
        const data = { content, user: socket.username };
        io.emit("chat message", data);
    });
    socket.on("set username", (username) => {
        socket.username = username;
    });
    socket.on("user connected", (user) => {
        io.emit("user connected", user);
    });
    socket.on("writting", () => {
        socket.broadcast.emit("writting", socket.username);
    });
});
io.listen(config_1.SYSTEM.PORT, {
    cors: {
        origin: config_1.SYSTEM.CORS,
    },
});
