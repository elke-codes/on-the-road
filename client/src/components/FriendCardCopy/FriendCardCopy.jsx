/// --- FRIENDINFO.JSX --- ///

import "./FriendCardCopy.scss";
import skyscanner from "../../assets/images/skyscanner.png";
import airBnb from "../../assets/images/airbnb.png";
import { distanceBetweenCoordinates } from "../../utils/location/distanceBetweenCoordinates";
import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import DividerLine from "../DividerLine/DividerLine";
import { useHistory } from "react-router";

import {
	TileLayer,
	Popup,
	MapContainer,
	Marker,
	useMapEvents
} from "react-leaflet";

const FriendCardCopy = ({
	friend,
	loggedInUser,
	setSelectedFriend,
	selectedFriend
}) => {
	console.log("friendcard", selectedFriend);

	// const handleClick = (friend) => {
	// 	setSelectedFriend(friend);
	// };
	// const history = useHistory;
	// const handleClickMap = (friend) => {
	// 	history.push("/map");
	// };

	return (
		<div class="card text-center shadow-2xl">
			{/* <iframe
				style="border:none; width:100%; margin:0 auto; display:block;"
				height="500px"
				allowfullscreen
				src="https://www.embed-leaflet.com/map?center=47.606011,-122.332147&zoom=8&style=&marker=true&popup=true&title=Marker&enhancedScroll=true"></iframe> */}
			<iframe
				className="card__mini-map"
				id="inlineFrameExample"
				title="Inline Frame Example"
				width="300"
				height="200"
				src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"></iframe>
			<div class="px-10 pt-10" className="mini-map">
				{/* <MapContainer
					center={[51.505, -0.09]}
					zoom={2}
					scrollWheelZoom={true}>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						// id="mapbox/streets-v11"
						id="mapbox://styles/mapbox/satellite-v9"
						projection="naturalEarth" // starting projection
					/>

					<Marker
						position={
							[51.505, -0.09]
							// [
							// friend.locations[0].lat,
							// friend.locations[0].lng
							// ]
						}
					/>
				</MapContainer> */}
			</div>

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
						{/* {distanceBetweenCoordinates(
							selectedFriend.locations[0].lat,
							selectedFriend.locations[0].lng,
							loggedInUser.locations[0].lat,
							loggedInUser.locations[0].lng
						)}{" "} */}
						3456 km
					</span>{" "}
					apart!
				</p>
				<p className="card__time">
					It's {/* api s for timezone...  */}
					<span className="card__time--bold">3:22pm</span>
					here
				</p>
				{/* <div class="justify-center card-actions">
					<button
						className="chat-button"
						onClick={() => {
							handleClick();
						}}>
						CHAT
					</button>
				</div> */}
			</div>
		</div>
	);
};

export default FriendCardCopy;
