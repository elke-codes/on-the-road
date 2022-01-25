/// --- INBOX.JSX --- ///

import "./Inbox.scss";
import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";
import { generateRoomName } from "../../utils/socket/generateRoomName";
import { distanceBetweenCoordinates } from "../../utils/location/distanceBetweenCoordinates";
import DividerLine from "../DividerLine/DividerLine";
import FriendCard from "../FriendCard/FriendCard";
import SearchBar from "../SearchBar/SearchBar";

const Inbox = ({
	friendsData,
	selectedFriend,
	setSelectedFriend,
	room,
	setRoom,
	loggedInUser
}) => {
	useEffect(() => {
		console.log("sel frien id", selectedFriend);
		if (!selectedFriend) {
			return;
		}
		const loggedInUserID = loggedInUser.id;
		const selectedFriendID = selectedFriend.id;
		//to make sure both users end up in the same room : generate a room id that is the logged in users' id + the secelected friends' id, sorted alphabetically, to get the same result every time the room is generated, whichever of the two users opens the conversation
		setRoom(generateRoomName(loggedInUserID, selectedFriendID));

		console.log("room", room);
	}, [selectedFriend]);

	const handleSelectedFriend = (friend) => {
		setSelectedFriend(friend);
	};

	return (
		<>
			<section className="inbox">
				{/* <h2 className="inbox__title">
					<SearchBar />
				</h2> */}
				<SearchBar />

				{/* filter over people, filter out id that matches logged in id */}

				{friendsData &&
					friendsData.map((friend) => {
						return (
							// <article className="inbox__user" key={uuid()}>
							<div
								key={uuid()}
								className="collapse border  border-base-300 inbox__user"
								onClick={() => {
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

									<span className="inbox__username">
										{" "}
										@{friend.userName}
									</span>
								</div>
								{/* <div className="collapse-content">
									{" "}
									<FriendCard
										friend={friend}
										loggedInUser={loggedInUser}
										setSelectedFriend={setSelectedFriend}
									/>
								</div> */}
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
		</>
	);
};

export default Inbox;

{
	/* <div className="inbox__details"> */
}
{
	/* <div className="inbox__details-left">
										<p>
											{" "}
											{friend.firstName} {friend.lastName}
										</p>
										<p className="inbox__details-location">
											{friend.locations[0].city}{" "}
											{friend.locations[0].country}
										</p>
									</div>
									{/* </div> */
}
// 	<div className="inbox__details-calculations">
// 		<p className="inbox__details-calculations-distance">
// 			We're{" "}
// 			<span className="friend-card__distance--bold">
// 				{distanceBetweenCoordinates(
// 					friend.locations[0].lat,
// 					friend.locations[0].lng,
// 					loggedInUser.locations[0]
// 						.lat,
// 					loggedInUser.locations[0]
// 						.lng
// 				)}{" "}
// 				km
// 			</span>{" "}
// 			apart!
// 		</p>
// 		<p className="inbox__details-calculations-time">
// 			It's{" "}
// 			{/* TODO api s for timezone...  */}
// 			<span className="friend-card__time--bold">
// 				3:22pm{" "}
// 			</span>{" "}
// 			here
// 		</p>
// 	</div>{" "}
// 	*/}
// </div>
