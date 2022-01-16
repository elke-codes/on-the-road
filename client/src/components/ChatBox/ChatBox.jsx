/// --- CHATBOX.JSX --- ///

import "./ChatBox.scss";
import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

const ChatBox = ({ userName, socket }) => {
	//keep track of message
	const [currentMessage, setCurrentMessage] = useState("");
	const [messageList, setMessageList] = useState([]);
	const [room, setRoom] = useState("1");
	//establish a connection between a user that just entered the page and the room they want to enter
	const joinRoom = () => {
		//set userName and room to be what's typed in the input fields
		//
		//check if fields aren't empty
		if (userName !== "" && room !== "") {
			//emit event from frontend
			//see index.js socket.on("join_room")
			// where room is the data we 're passing back to server
			socket.emit("join_room", room);
		}
	};

	//listen for changes in room
	useEffect(() => {
		joinRoom();
	}, [room]);
	//allow messages to be sent through socket
	//async because you want to wait for the state to be set
	//...can do with useEffect listening to the currentMessage to change?
	const sendMessage = async () => {
		if (currentMessage !== "") {
			const messageData = {
				room: room,
				author: userName,
				message: currentMessage,
				time:
					new Date(Date.now()).getHours() +
					":" +
					new Date(Date.now()).getMinutes()
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
			console.log(data);
			//grab current/previous messagelist, return that with the message added
			setMessageList((list) => [...list, data]);
		});
	}, [socket]);
	return (
		<section className="chat-box">
			{/* header talking to? */}
			<article className="chat-box__header">chatheader</article>
			<article className="chat-box__body">
				<ScrollToBottom className="message-container">
					{messageList.map((messageContent) => {
						{
							/* where messagecontent is the data received back from the server  */
						}
						return (
							<div
								className="message"
								// check who is the autor of the message, it it s the one sending it , it s you lol, otherwise it s the other
								id={
									userName === messageContent.author
										? "you"
										: "other"
								}>
								<div>
									<div className="message-content">
										{" "}
										<p>{messageContent.message}</p>
									</div>
									<div className="message-meta">
										<p>
											{" "}
											<p className="time">
												{messageContent.time}
											</p>
											<p className="author">
												{messageContent.author}
											</p>
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</ScrollToBottom>
			</article>
			<article className="chat-box__footer">
				<input
					type="text"
					value={currentMessage}
					placeholder="Hello..."
					onChange={(e) => {
						setCurrentMessage(e.target.value);
					}}
					//if the key pressed is enter send the message
					onKeyPress={(e) => {
						e.key === "Enter" && sendMessage();
					}}
				/>
				<button onClick={sendMessage}>&#9658;</button>
			</article>
		</section>
	);
};

export default ChatBox;

// /// --- CHATBOX.JSX --- ///

// // Thanks to PedroTech for guiding me through my first socket.io experience!
// // Basic app functionality created by following their tutorial on // https://www.youtube.com/watch?v=NU-HfZY3ATQ

// import React, { useEffect, useState } from "react";
// import ScrollToBottom from "react-scroll-to-bottom";

// const ChatBox = ({ socket, userName, room }) => {
// 	//keep track of message
// 	const [currentMessage, setCurrentMessage] = useState("");
// 	const [messageList, setMessageList] = useState([]);

// 	//allow messages to be sent through socket
// 	//async because you want to wait for the state to be set
// 	//...can do with useEffect listening to the currentMessage to change?
// 	const sendMessage = async () => {
// 		if (currentMessage !== "") {
// 			const messageData = {
// 				room: room,
// 				author: userName,
// 				message: currentMessage,
// 				time:
// 					new Date(Date.now()).getHours() +
// 					":" +
// 					new Date(Date.now()).getMinutes()
// 			};

// 			//see index.js for listener listening to "send_message"
// 			//send the message data to the backend after the current message has been changed

// 			await socket.emit("send_message", messageData);
// 			//to send message to both, update both messaglists
// 			setMessageList((list) => [...list, messageData]);
// 			//empty the container after sending the message
// 			setCurrentMessage("");
// 		}
// 	};

// 	// listen to whenever there s changes to our socket server
// 	useEffect(() => {
// 		//listen for event emitted from server "receive_message", receive data sent from backend
// 		socket.on("receive_message", (data) => {
// 			console.log(data);
// 			//grab current/previous messagelist, return that with the message added
// 			setMessageList((list) => [...list, data]);
// 		});
// 	}, [socket]);
// 	return (
// 		<section className="chat-box">
// 			{/* header talking to? */}
// 			<article className="chat-box__header">chatheader</article>
// 			<article className="chat-box__body">
// 				<ScrollToBottom className="message-container">
// 					{messageList.map((messageContent) => {
// 						{
// 							/* where messagecontent is the data received back from the server  */
// 						}
// 						return (
// 							<div
// 								className="message"
// 								// check who is the autor of the message, it it s the one sending it , it s you lol, otherwise it s the other
// 								id={
// 									userName === messageContent.author
// 										? "you"
// 										: "other"
// 								}>
// 								<div>
// 									<div className="message-content">
// 										{" "}
// 										<p>{messageContent.message}</p>
// 									</div>
// 									<div className="message-meta">
// 										<p>
// 											{" "}
// 											<p className="time">
// 												{messageContent.time}
// 											</p>
// 											<p className="author">
// 												{messageContent.author}
// 											</p>
// 										</p>
// 									</div>
// 								</div>
// 							</div>
// 						);
// 					})}
// 				</ScrollToBottom>
// 			</article>
// 			<article className="chat-box__footer">
// 				<input
// 					type="text"
// 					value={currentMessage}
// 					placeholder="Hello..."
// 					onChange={(e) => {
// 						setCurrentMessage(e.target.value);
// 					}}
// 					//if the key pressed is enter send the message
// 					onKeyPress={(e) => {
// 						e.key === "Enter" && sendMessage();
// 					}}
// 				/>
// 				<button onClick={sendMessage}>&#9658;</button>
// 			</article>
// 		</section>
// 	);
// };

// export default ChatBox;
