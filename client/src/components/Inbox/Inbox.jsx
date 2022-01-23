/// --- INBOX.JSX --- ///

import "./Inbox.scss";
import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";
import { generateRoomName } from "../../utils/socket/generateRoomName";
import { distanceBetweenCoordinates } from "../../utils/distanceBetweenCoordinates";

const Inbox = ({
	friendsData,
	selectedFriend,
	setSelectedFriend,
	room,
	setRoom,
	loggedInUser
}) => {
	const handleSelectedFriend = async (friend) => {
		// console.log("loggedinuser.id", loggedInUser.id);
		// console.log("selecterdfriend", selectedFriend);
		await setSelectedFriend(friend);
		const loggedInUserID = loggedInUser.id;
		// console.log("selectedFriend", selectedFriend);
		const selectedFriendID = selectedFriend.id;
		const generatedRoom = generateRoomName(
			loggedInUserID,
			selectedFriendID
		);
		await setRoom(generatedRoom);

		await setRoom(generateRoomName(loggedInUserID, selectedFriendID));
		// console.log("room", room);
	};

	return (
		<>
			<section className="inbox">
				<h2 className="inbox__title">FRIENDS</h2>
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
								<input
									type="checkbox"
									className="inbox__friend-active"
								/>

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
									{/* <div className="inbox__details"> */}
									<div className="inbox__details-left">
										<p>
											{" "}
											{friend.firstName} {friend.lastName}
										</p>
										<p className="inbox__details-location">
											{friend.locations[0].city}{" "}
											{friend.locations[0].country}
										</p>
									</div>
									{/* </div> */}
									<div className="inbox__details-calculations">
										<p className="inbox__details-calculations-distance">
											We're{" "}
											<span className="friend-card__distance--bold">
												{distanceBetweenCoordinates(
													friend.locations[0].lat,
													friend.locations[0].lng,
													loggedInUser.locations[0]
														.lat,
													loggedInUser.locations[0]
														.lng
												)}{" "}
												km
											</span>{" "}
											apart!
										</p>
										<p className="inbox__details-calculations-time">
											It's{" "}
											{/* TODO api s for timezone...  */}
											<span className="friend-card__time--bold">
												3:22pm{" "}
											</span>{" "}
											here
										</p>
									</div>
								</div>
							</div>
							// </div>
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
		</>
	);
};

export default Inbox;
