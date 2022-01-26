/// --- CHATPAGE.JSX --- ///

import "./ChatPage.scss";
import React, { useEffect, useState } from "react";

import ChatBox from "../../components/ChatBox/ChatBox";

import socket from "../../utils/socket/socket-client";
import { io } from "socket.io-client";
import Inbox from "../../components/Inbox/Inbox";
import Footer from "../../components/Footer/Footer";
import Register from "../../components/Register/Register";
import axios from "axios";
import FriendCardCopy from "../../components/FriendCardCopy/FriendCardCopy";

// // establish connection to backend
// // link to where running socket.io server
// // SERVER_URL

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

	// when there s a logged in user connect
	useEffect(() => {
		if (!loggedInUser) {
			return;
		}
		// socket.auth = { userName: loggedInUser.userName };
		// console.log(socket.auth);
		socket.connect();

		//get messages and display them in the chatroom when a user logs in.
	}, [loggedInUser]);

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
									// className="chat-page__button"
									className="btn btn-sm btn-success mr-4"
									onClick={() => setRegister(true)}>
									Register
								</button>
								<button
									// className="chat-page__button"
									className="btn btn-primary btn-sm">
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
						{selectedFriend && (
							<FriendCardCopy
								selectedFriend={selectedFriend}
								loggedInUser={loggedInUser}
							/>
						)}
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
