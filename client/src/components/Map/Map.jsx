/// --- MAP.JSX --- ///
import "./Map.scss";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
	TileLayer,
	Popup,
	MapContainer,
	Marker,
	useMapEvents
} from "react-leaflet";
import { v4 as uuid } from "uuid";
import FriendCard from "../FriendCard/FriendCard";

const Map = ({ userName, users, loggedIn }) => {
	const [markers, setMarkers] = useState([]);
	const [friendsData, setFriendsData] = useState([]);
	const [userPosition, setUserPosition] = useState(null);
	const [activeFriend, setActiveFriend] = useState(null);
	console.log("users in map", users);
	console.log("loggedininmap", loggedIn);

	const getFriendsData = async () => {
		const result = await axios.get("http://localhost:8000/users");
		console.log("getFriendsData", result.data);
		return result.data;
	};

	useEffect(async () => {
		const friends = await getFriendsData();
		console.log("friends to set", friends);
		setFriendsData(friends);
		// const friendsMarkers = friends.map((friend) => friend.location);
		// setMarkers(friendsMarkers);
		// console.log("friendsmarkers", friendsMarkers);
		console.log("friends", friends);
		// renderFriendMarkers(friends);
	}, [loggedIn]);

	//on click asks for location and then brings your marker there so smoothly
	const LocationMarker = () => {
		//Save position when user signs up --> TODO add this to their location data

		const map = useMapEvents({
			click() {
				map.locate();
			},
			locationfound(e) {
				console.log("locationfound", e);
				setUserPosition(e.latlng);
				map.flyTo(e.latlng, map.getZoom());
			}
		});

		return userPosition === null ? null : (
			<Marker position={userPosition}>
				<Popup>You</Popup>
			</Marker>
		);
	};

	return (
		<section className="map">
			<MapContainer
				center={[51.505, -0.09]}
				zoom={2}
				scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					// id="mapbox/streets-v11"
					id="mapbox://styles/mapbox/satellite-v9"
				/>
				{friendsData &&
					friendsData.map((friend) => {
						return (
							<Marker
								position={[
									friend.locations[0].lat,
									friend.locations[0].lng
								]}
								key={uuid()}
								// onClick={() => {
								// 	setActiveFriend(friend);
								// }}
								// onMouseOver={(e) => {
								// 	//stackoverflow.com/questions/51662140/how-to-toggle-popup-in-react-leaflet-on-mouse-hover
								// 	// Leaflet Marker object is accessible via event.target property of mouseover and mouseout events, so popup could be opened/closed like this:
								// 	e.target.openPopup();
								// }}
								// onMouseOut={(e) => {
								// 	e.target.closePopup();
								// }}
							>
								<Popup>
									<p>{friend.userName}</p>
									<p>
										{friend.locations[0].city}{" "}
										{friend.locations[0].county}
									</p>
									{/* <FriendCard friend={friend} />{" "} */}
								</Popup>
							</Marker>
						);
					})}
				<LocationMarker />
			</MapContainer>
		</section>
	);
};

export default Map;

//It's simple: create L.Map with scrollWheelZoom: false option, then add a listener:

// map.once('focus', function() { map.scrollWheelZoom.enable(); });
