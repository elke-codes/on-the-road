/// --- CHATPAGE.JSX --- ///

import "./ChatPage.scss";
import React from "react";

const ChatPage = ({ userName }) => {
	//get username from login
	const [userName, setUserName] = useState("");
	//get room from click friend inbox/friendlist
	const [room, setRoom] = useState("");
	//get currentFriend from click on friend inbox/friendlist
	const [currentFriend, setCurrentFriend] = useState("");

	return (
		<main className="chat-page">
			{/* <Inbox currentFriend={currentFriend}/> */}
			{/* <ChatBox socket={socket} userName={userName} room={room}/> currentFriend={currentFriend} */}
			{/* <FriendInfo currentFriend={currentFriend}>*/}
		</main>
	);
};

export default ChatPage;
