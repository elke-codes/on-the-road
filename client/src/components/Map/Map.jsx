/// --- MAP.JSX --- ///
import "./Map.scss";

import React, { useEffect, useState } from "react";
import {
	TileLayer,
	Popup,
	MapContainer,
	Marker,
	useMapEvents
} from "react-leaflet";
import { v4 as uuid } from "uuid";
import { getFriendsData } from "../../utils/getFriendsData";
import FriendCard from "../FriendCard/FriendCard";

const Map = ({ loggedInUser, friendsData, setSelectedFriend }) => {
	const [markers, setMarkers] = useState([]);

	const [userPosition, setUserPosition] = useState(null);
	const [activeFriend, setActiveFriend] = useState(null);

	//on click asks for location and then brings your marker there so smoothly
	const LocationMarker = () => {
		//Save position when user signs up --> TODO add this to their location data

		const map = useMapEvents({
			click() {
				map.locate();
			},
			locationfound(e) {
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
					projection="naturalEarth" // starting projection
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
								loggedInUser={loggedInUser}
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
									{/* <p>
										{console.log("loggedInuser in popup")}
									</p> */}
									{/*	<p>
										{friend.locations[0].city}{" "}
										{friend.locations[0].county}
									</p> */}
									<FriendCard
										friend={friend}
										loggedInUser={loggedInUser}
										setSelectedFriend={setSelectedFriend}
									/>{" "}
								</Popup>
							</Marker>
						);
					})}
				{/* <Marker
					position={[
						loggedInUser.locations[0].lat,
						loggedInUser.locations[0].lng
					]}>
					<Popup>
						<p>You</p>
						<p>{loggedInUser.locations[0].city}</p>
						<p>{loggedInUser.locations[0].country}</p>
					</Popup>
				</Marker> */}

				<LocationMarker />
			</MapContainer>
		</section>
	);
};

export default Map;

//It's simple: create L.Map with scrollWheelZoom: false option, then add a listener:

// map.once('focus', function() { map.scrollWheelZoom.enable(); });
