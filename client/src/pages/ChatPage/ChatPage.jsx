/// --- CHATPAGE.JSX --- ///

import "./ChatPage.scss";
import React, { useEffect, useState } from "react";

import ChatBox from "../../components/ChatBox/ChatBox";

// import socket from "../../utils/socket/socket-client";
import { io } from "socket.io-client";
import Inbox from "../../components/Inbox/Inbox";
import Footer from "../../components/Footer/Footer";
import Register from "../../components/Register/Register";
// establish connection to backend
// link to where running socket.io server
// SERVER_URL
const socket = io.connect("http://localhost:3001");

const ChatPage = ({
	loggedInUser,
	friendsData,
	selectedFriend,
	setSelectedFriend,
	room,
	setRoom,
	setLoggedInUser
}) => {
	const [register, setRegister] = useState(false);
	// console.log("loggedinUser chatpage", loggedInUser);

	// // when there s a logged in user, set the socket auth to user name and connect
	// useEffect(() => {
	// 	if (!loggedInUser) {
	// 		return;
	// 	}
	// 	socket.auth = { userName: loggedInUser.userName };
	// 	console.log(socket.auth);
	// 	socket.connect();
	// }, [loggedInUser]);

	// let users = socket.on("users", (users) => {
	// 	users.forEach((user) => {
	// 		user.self = user.userID === socket.id;
	// 		// initReactiveProperties(user);
	// 	});
	// 	// put the current user first, and then sort by username
	// 	// users = users.sort((a, b) => {
	// 	// 	if (a.self) return -1;
	// 	// 	if (b.self) return 1;
	// 	// 	if (a.username < b.username) return -1;
	// 	// 	return a.username > b.username ? 1 : 0;
	// 	// });
	// 	console.log("users", users);
	// 	return users;
	// });

	// socket.on("user connected", (user) => {
	// 	// initReactiveProperties(user);
	// 	users.push(user);
	// });

	// console.log(users);

	// socket.on("message", (content) => {
	// 	if (selectedFriend) {
	// 		socket.emit("private message", {
	// 			content,
	// 			to: selectedFriend.userID
	// 		});
	// 		selectedFriend.messages.push({
	// 			content,
	// 			fromSelf: true
	// 		});
	// 	}
	// });

	return (
		<>
			<main className="chat-page">
				{!loggedInUser && !register && (
					<>
						<div className="chat-page__not-logged-in">
							<h2 className="chat-page__copy">
								Please log in to continue...
							</h2>
							<div className="chat-page__buttons">
								<button
									className="chat-page__button"
									onClick={() => setRegister(true)}>
									Register
								</button>
								<button className="chat-page__button">
									Login
								</button>
							</div>
						</div>
					</>
				)}

				{/* <Map className="chat-page__map" /> */}
				{!loggedInUser && register && (
					<Register
						setLoggedInUser={setLoggedInUser}
						className="chat-page__register"
					/>
				)}

				{loggedInUser ? (
					<>
						<Inbox
							friendsData={friendsData}
							loggedInUser={loggedInUser}
							selectedFriend={selectedFriend}
							setSelectedFriend={setSelectedFriend}
							room={room}
							setRoom={setRoom}
						/>
						<ChatBox
							loggedInUser={loggedInUser}
							socket={socket}
							selectedFriend={selectedFriend}
							room={room}
							setRoom={setRoom}
							socket={socket}
						/>
					</>
				) : null}
			</main>
			<Footer />
		</>
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
