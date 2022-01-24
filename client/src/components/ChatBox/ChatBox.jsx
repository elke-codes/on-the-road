/// --- CHATBOX.JSX --- ///

import "./ChatBox.scss";
import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { timeAgo } from "../../utils/timeAgo";
// import { generateRoomName } from "../../utils/socket/generateRoomName";

const ChatBox = ({
	friendsData,
	loggedInUser,
	socket,
	selectedFriend,
	room,
	setRoom
}) => {
	//keep track of message
	const [currentMessage, setCurrentMessage] = useState("");
	const [messageList, setMessageList] = useState([]);

	const loggedInUserID = loggedInUser.id;

	//listen for changes in room,
	// clear the messagelist in state,
	// join the selected room
	// get all the previous messages sent in that room from the data in the backend
	// set the messagelist to contain all the old messages from the room
	useEffect(() => {
		if (!room) {
			return;
		}
		setMessageList([]);
		joinRoom(room);
		console.log("room before get", room);
		const getMessageList = axios
			.get(`http://localhost:8000/chat/${loggedInUserID}/${room}`)
			.then((result) => {
				console.log("axios get chat", result);
				// update messagelist with all previous messages
				if (result.data.length) {
					setMessageList(result.data);
				}
			});

		// setMessageList(getMessageList);
	}, [room]);

	// useEffect(() => {
	// 	console.log("messageList", messageList);
	// }, [messageList]);

	const { userName } = loggedInUser;

	//establish a connection between a user that just entered the page and the room they want to enter
	const joinRoom = (room) => {
		//emit event from frontend
		//see index.js socket.on("join_room")
		// where room is the data we 're passing back to server
		socket.emit("join_room", room);
	};

	//listen for changes in room, clear the messagelist, join the room
	// useEffect(() => {
	// 	setMessageList([]);
	// 	joinRoom(room);
	// }, [room]);

	//allow messages to be sent through socket
	//async because you want to wait for the state to be set
	//...can do with useEffect listening to the currentMessage to change?
	const sendMessage = async () => {
		if (currentMessage !== "") {
			const messageData = {
				room: room,
				author: loggedInUser.userName,
				authorID: loggedInUser.id,
				receivedBy: selectedFriend.userName,
				receivedByID: selectedFriend.id,
				message: currentMessage,
				time: new Date().getTime()
			};
			//see index.js for listener listening to "send_message"
			//send the message data to the backend after the current message has been changed
			await socket.emit("send_message", messageData);
			//to send message to both, update both messaglists
			setMessageList((list) => [...list, messageData]);
			//empty the container after sending the message
			setCurrentMessage("");
		}
	};
	// listen to whenever there s changes to our socket server
	useEffect(() => {
		//listen for event emitted from server "receive_message", receive data sent from backend
		socket.on("receive_message", (data) => {
			console.log("receive message data from client", data);
			//grab current/previous messagelist, return that with the message added
			setMessageList((list) => [...list, data]);
		});
	}, [socket]);

	return (
		<section className="chat-box">
			{/* header talking to? */}
			<article className="chat-box__header">
				{selectedFriend
					? `Chat with ${selectedFriend.userName}`
					: "Chat"}
			</article>
			<article className="chat-box__body">
				<div className="message-container">
					{messageList.map((messageContent) => {
						// console.log("messageContent", messageContent);
						{
							/* where messagecontent is the data received back from the server  */
						}
						return (
							<div
								className="message"
								key={uuid()}
								// check who is the autor of the message, it it s the one sending it , it s you lol, otherwise it s the other
								id={
									userName === messageContent.author
										? "you"
										: "other"
								}>
								<div>
									<div className="message__content">
										{" "}
										<p>{messageContent.message}</p>
									</div>
									<div className="message__meta">
										<div>
											{" "}
											<p className="message__meta-time">
												{timeAgo(messageContent.time)}
											</p>
											<p className="message__meta-author">
												{(userName ===
												messageContent.author)
													? messageContent.author
													: messageContent.receivedBy}
											</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</article>
			<article className="chat-box__footer">
				<input
					className="chat-box__footer-input"
					type="text"
					value={currentMessage}
					placeholder="Write your message here..."
					onChange={(e) => {
						setCurrentMessage(e.target.value);
					}}
					//if the key pressed is enter send the message
					onKeyPress={(e) => {
						e.key === "Enter" && sendMessage();
					}}
				/>
				<button
					className="chat-box__footer-button"
					onClick={sendMessage}>
					&#9658;
				</button>
			</article>
		</section>
	);
};

export default ChatBox;
