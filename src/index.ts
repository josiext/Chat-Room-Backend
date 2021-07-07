/* import { createServer } from "http";
import { Server, Socket } from "socket.io";

import { SYSTEM } from "./config";

const httpServer = createServer();
const io = new Server(httpServer);

interface ISocket extends Socket {
  username: string;
}

const DEFAULT_USERNAME = "anonymous";

io.on("connection", (socket: any) => {
  console.log(`connect: ${socket.id}`);

  socket.username = DEFAULT_USERNAME;
  socket.broadcast.emit("user connected", socket.username);

  socket.on("disconnect", () => {
    console.log(`disconnect: ${socket.id}`);
  });

  socket.on("chat message", (content: string) => {
    const data = { content, user: socket.username };

    io.emit("chat message", data);
  });

  socket.on("set username", (username: string) => {
    socket.username = username;
  });

  socket.on("user connected", (user: string) => {
    io.emit("user connected", user);
  });

  socket.on("writting", () => {
    socket.broadcast.emit("writting", socket.username);
  });
});

io.listen(SYSTEM.PORT, {
  cors: {
    origin: SYSTEM.CORS,
  },
});

console.log("Connected on port:", SYSTEM.PORT); */

const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const DEFAULT_USERNAME = "anonymous";

io.on("connection", (socket: any) => {
  console.log(`connect: ${socket.id}`);

  socket.username = DEFAULT_USERNAME;
  socket.broadcast.emit("user connected", socket.username);

  socket.on("disconnect", () => {
    console.log(`disconnect: ${socket.id}`);
  });

  socket.on("chat message", (content: string) => {
    const data = { content, user: socket.username };

    io.emit("chat message", data);
  });

  socket.on("set username", (username: string) => {
    socket.username = username;
  });

  socket.on("user connected", (user: string) => {
    io.emit("user connected", user);
  });

  socket.on("writting", () => {
    socket.broadcast.emit("writting", socket.username);
  });
});

server.listen(4005, () => {
  console.log("listening on *:4005");
});
