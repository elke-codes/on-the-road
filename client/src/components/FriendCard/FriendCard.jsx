/// --- FRIENDINFO.JSX --- ///

import "./FriendCard.scss";
import skyscanner from "../../assets/images/skyscanner.png";
import airBnb from "../../assets/images/airbnb.png";
import { distanceBetweenCoordinates } from "../../utils/distanceBetweenCoordinates";
import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";

const FriendCard = ({ friend, loggedInUser, setSelectedFriend }) => {
	// console.log("loggedinusr friendcard", loggedInUser);

	// const handleClick = (friend) => {
	// 	setSelectedFriend(friend);
	// };

	return (
		// <section className="friend">
		<article className="friend-card">
			<div className="friend-card__top-container">
				<p className="friend-card__user-name">@{friend.userName}</p>
				<p className="friend-card__name">
					{friend.firstName} {friend.lastName}
				</p>
				<Avatar />
				{/* https://myprojects.geoapify.com/api/Uvf0Dk1JqGJgrI0OCWvD/keys */}
				<p className="friend-card__location">
					{friend.locations[0].city}, {friend.locations[0].country}
				</p>
			</div>
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
				It's {/* api s for timezone...  */}
				<span className="friend-card__time--bold">3:22pm </span> here
			</p>
			<Link
				to="/chat"
				// onClick={(friend) => {
				// 	handleClick(friend);
				// }}
				className="friend-card__chat-link">
				Chat with me!
			</Link>
			<div className="friend-card__bottom-container">
				{/* give classname to not show when on map */}
				{/* <div className="friend-card__mini-map-container">
					<iframe
						className="friend-card__mini-map"
						id="inlineFrameExample"
						title="Inline Frame Example"
						width="300"
						height="200"
						src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"></iframe>
				</div> */}
				{/* <div className="friend-card__links">
					<a
						href="http://www.airbnb.com"
						className="friend-card__link">
						<img
							src={airBnb}
							alt="airbnb logo"
							className="friend-card__link-image"
						/>
					</a>
					<a
						href="http://www.skyscanner.com"
						className="friend-card__link">
						<img
							src={skyscanner}
							alt="skyscanner logo"
							className="friend-card__link-image"
						/>
					</a>
				</div> */}
			</div>
		</article>
		// </section>
	);
};

export default FriendCard;
