import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("Initializing socket...");

  socket = io("http://localhost:3001", {
    transports: ["websocket"],
  });
  console.log("Connecting socket...");

  socket.on("connect", () => console.log("Connected to socket!"));
};

export const send = (color) => {
  console.log("Sending message...");
  //emit means send data "client to server" or "server to client"
  socket.emit("newColor", color);
};

export const subscribe = (cb) => {
  //on means listen to channel name receive
  socket.on("receive", (color) => {
    console.log("Received color: ", color);
    cb(color);
  });
};
