import { io } from "socket.io-client";
// // SERVER_URL
const URL = "http://localhost:3001";
// autoconnect false until the user logs int then, we set the socket.auth to userName and connect with socket.connect , all this in chatpage : )
const socket = io(URL, { autoConnect: false });
// catch all listener ny event received by the client will be printed in the console.
socket.onAny((event, ...args) => {
	console.log(event, args);
});
export default socket;
