/// --- CHATPAGE.JSX --- ///

import "./ChatPage.scss";
import React, { useEffect, useState } from "react";

import ChatBox from "../../components/ChatBox/ChatBox";
import io from "socket.io-client";
import FriendCard from "../../components/FriendCard/FriendCard";

import Inbox from "../../components/Inbox/Inbox";

//establish connection to backend
//link to where running socket.io server
//SERVER_URL
const socket = io.connect("http://localhost:3001");

const ChatPage = ({ userName, loggedIn, users }) => {
	// const [room, setRoom] = useState("");

	return (
		<main className="chat-page">
			<Inbox users={users} />
			{/* <Inbox currentFriend={currentFriend}/> */}
			{/* or */}
			{/* <Inbox currentFriend={currentFriend}/> */}

			<ChatBox userName={userName} socket={socket} />

			{/* <FriendCard /> */}
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
