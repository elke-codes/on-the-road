/// --- INBOX.JSX --- ///

import "./Inbox.scss";
import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";
import { generateRoomName } from "../../utils/socket/generateRoomName";

const Inbox = ({
	friendsData,
	selectedFriend,
	setSelectedFriend,
	room,
	setRoom,
	loggedInUser
}) => {
	const handleSelectedFriend = async (friend) => {
		console.log("loggedinuser.id", loggedInUser.id);
		console.log("selecterdfriend", selectedFriend);
		await setSelectedFriend(friend);
		const loggedInUserID = loggedInUser.id;
		console.log("selectedFriend", selectedFriend);
		const selectedFriendID = selectedFriend.id;
		// const generatedRoom = generateRoomName(
		// 	loggedInUserID,
		// 	selectedFriendID
		// );
		// await setRoom(generatedRoom);

		await setRoom(generateRoomName(loggedInUserID, selectedFriendID));
		console.log("room", room);
	};

	return (
		<section className="inbox">
			<h2 className="inbox__title">Inbox</h2>
			{/* filter over people, filter out id that matches logged in id */}
			{friendsData &&
				friendsData.map((friend) => {
					return (
						// <article className="inbox__user" key={uuid()}>
						<div
							key={uuid()}
							className="collapse border rounded-box border-base-300 collapse-arrow inbox__user"
							onClick={async () => {
								handleSelectedFriend(friend);
								// setSelectedFriend(friend);
								// generateRoomName(
								// 	loggedInUser.id,
								// 	selectedFriend.id
								// );
								// console.log("room", room);
							}}>
							<input type="checkbox" />

							<div className="collapse-title text-xl font-medium inbox__user-identity">
								<div className="avatar online">
									<div className="rounded-full w-10 h-10">
										<img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png" />
									</div>
								</div>
								<span className="inbox__username"></span> @
								{friend.userName}
							</div>
							<div className="collapse-content">
								<p>
									{" "}
									{friend.firstName} {friend.lastName}
								</p>
								<p className="inbox__location">
									{friend.locations[0].city}{" "}
									{friend.locations[0].country}
								</p>
							</div>
						</div>
						/* <img
								className="inbox__image"
								src="https://placedog.net/50"
								alt=""
							/>
							<p className="inbox__name">{user.userName}</p> */
						// </article>
					);
				})}
		</section>
	);
};

export default Inbox;
