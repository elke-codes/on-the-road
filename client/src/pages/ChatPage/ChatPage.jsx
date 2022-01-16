/// --- CHATPAGE.JSX --- ///

import "./ChatPage.scss";
import React, { useState } from "react";

import ChatBox from "../../components/ChatBox/ChatBox";
import io from "socket.io-client";

//establish connection to backend
//link to where running socket.io server
//SERVER_URL
const socket = io.connect("http://localhost:3001");

const ChatPage = ({ userName }) => {
	const [room, setRoom] = useState("");

	return (
		<main>
			<h1>ChatPage</h1>
			{userName ? <p>chat away {userName}</p> : null}
			{/* <Inbox currentFriend={currentFriend}/> */}
			{/* or */}
			{/* <Inbox currentFriend={currentFriend}/> */}
			<ChatBox userName={userName} socket={socket} />
			{/* <FriendInfo currentFriend={currentFriend}>*/}
			{/*  or*/}
			{/* <FriendInfo room={room}>*/}
		</main>
	);
};

export default ChatPage;

// const ChatPage = ({ userName }) => {
// 	//get username from login
// 	const [userName, setUserName] = useState("");
// 	//get room from click friend inbox/friendlist
// 	const [room, setRoom] = useState("");
// 	//get currentFriend from click on friend inbox/friendlist
// 	const [currentFriend, setCurrentFriend] = useState("");

// 	return (
// 		<main className="chat-page">
// 			{/* <Inbox currentFriend={currentFriend}/> */}
// 			{/* <ChatBox socket={socket} userName={userName} room={room}/> currentFriend={currentFriend} */}
// 			{/* <FriendInfo currentFriend={currentFriend}>*/}
// 		</main>
// 	);
// };

// export default ChatPage;
