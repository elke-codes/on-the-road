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

const Map = ({ userName, users }) => {
	const [markers, setMarkers] = useState([]);
	const [friendsData, setFriendsData] = useState([]);
	const [userPosition, setUserPosition] = useState(null);
	const [activeFriend, setActiveFriend] = useState(null);
	console.log("users in map", users);

	// const getFriendsData = async () => {
	// 	const result = await axios.get("http://localhost:8000/users/");
	// 	return result.data;
	// };

	// useEffect(async () => {
	// 	const friends = await getFriendsData();
	// 	console.log("friends to set", friends);
	// 	setFriendsData(friends);
	// 	// const friendsMarkers = friends.map((friend) => friend.location);
	// 	// setMarkers(friendsMarkers);
	// 	// console.log("friendsmarkers", friendsMarkers);
	// 	console.log("friends", friends);
	// 	// renderFriendMarkers(friends);
	// }, []);

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
				<Popup>You(username?) are in userPosition to Location</Popup>
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
				{users.map((friend) => {
					return (
						<Marker
							position={friend.location}
							key={uuid()}
							onClick={() => {
								setActiveFriend(friend);
							}}>
							<Popup>
								<FriendCard friend={friend} />{" "}
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
