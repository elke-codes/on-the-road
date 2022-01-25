/// --- FRIENDINFO.JSX --- ///

import "./FriendCard.scss";
import skyscanner from "../../assets/images/skyscanner.png";
import airBnb from "../../assets/images/airbnb.png";
import { distanceBetweenCoordinates } from "../../utils/location/distanceBetweenCoordinates";
import React from "react";
import { useHistory } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import DividerLine from "../DividerLine/DividerLine";

const FriendCard = ({ friend, loggedInUser, setSelectedFriend }) => {
	const history = useHistory();

	const handleSelectedFriend = (friend) => {
		setSelectedFriend(friend);
		history.push("/chat");
	};

	return (
		<section className="friend">
			<article className="friend-card">
				<div className="friend-card__user">
					<Avatar />
					<p className="friend-card__user-name">@{friend.userName}</p>
				</div>

				<DividerLine />
				<p className="friend-card__name">
					{friend.firstName} {friend.lastName}
				</p>

				<p className="friend-card__location">
					{friend.locations[0].city}, {friend.locations[0].country}
				</p>
				<br />
				<p className="friend-card__distance">
					We're{" "}
					{/* https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates */}
					<span className="friend-card__distance--bold">
						{distanceBetweenCoordinates(
							friend.locations[0].lat,
							friend.locations[0].lng,
							loggedInUser.locations[0].lat,
							loggedInUser.locations[0].lng
						)}{" "}
						km
					</span>{" "}
					apart!
				</p>

				<p className="friend-card__time">
					It's {/* TODO API for timezone...  */}
					<span className="friend-card__time--bold">
						3:22pm{" "}
					</span>{" "}
					here
				</p>

				<button
					className="friend-card__chat-button"
					onClick={() => {
						handleSelectedFriend(friend);
					}}>
					{" "}
					Chat with me!
				</button>

				<div className="friend-card__bottom-container"></div>
			</article>
		</section>
	);
};

export default FriendCard;
