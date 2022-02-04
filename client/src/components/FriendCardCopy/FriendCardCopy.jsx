/// --- FRIENDINFO.JSX --- ///

import "./FriendCardCopy.scss";
import { distanceBetweenCoordinates } from "../../utils/location/distanceBetweenCoordinates";
import React from "react";
import Avatar from "../Avatar/Avatar";
import DividerLine from "../DividerLine/DividerLine";

const FriendCardCopy = ({ loggedInUser, selectedFriend }) => {
	console.log("friendcardcopy selectedfriend", selectedFriend.locations[0]);
	console.log("friendcardcopy loggedInUser", loggedInUser);

	return (
		<div class="card text-center shadow-2xl">
			<iframe
				className="card__mini-map"
				id="inlineFrameExample"
				title="Inline Frame Example"
				width="300"
				height="200"
				src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"></iframe>

			<div class="card-body">
				<div className="card-title__wrapper">
					<Avatar />
					<h2 class="card-title">@{selectedFriend.userName} </h2>
				</div>
				<DividerLine />
				<p className="card__name">
					{selectedFriend.firstName} {selectedFriend.lastName}
				</p>

				{/* https://myprojects.geoapify.com/api/Uvf0Dk1JqGJgrI0OCWvD/keys */}
				<p className="card__location">
					{selectedFriend.locations[0].city},
					{selectedFriend.locations[0].country}
				</p>
				<p className="card__distance">
					We're
					{/* https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates */}
					<span className="card__distance--bold">
						{distanceBetweenCoordinates(
							selectedFriend.locations[0].lat,
							selectedFriend.locations[0].lng,
							loggedInUser.locations[0].lat,
							loggedInUser.locations[0].lng
						)}{" "}
						km
					</span>{" "}
					apart!
				</p>
				<p className="card__time">
					It's {/* TODO api s for timezone...  */}
					<span className="card__time--bold">3:22pm</span>
					here
				</p>
			</div>
		</div>
	);
};

export default FriendCardCopy;
