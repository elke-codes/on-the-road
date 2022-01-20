/// --- MAPPAGE.JSX --- ///

import "./MapPage.scss";
import React, { useState } from "react";
import FriendCard from "../../components/FriendCard/FriendCard";
import Map from "../../components/Map/Map";
import Inbox from "../../components/Inbox/Inbox";

const MapPage = ({ userName, users, loggedIn }) => {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		console.log("clicked!");
		setShowModal(true);
	};
	return (
		<main className="map-page">
			{/* <h1>MAP PAGE</h1> */}
			{/* <article className="map-page__explanation">
				<h3>How to use this map</h3>
				<ul>
					<li>
						TODO PUT THIS IN A LITTLE ? ICON AND SHOW MODAL ON CLICK
					</li>
					<li>click anywhere on the map to go to your location</li>
					<li>drag around the map to see where your friends are</li>
					<li>... your friends are hidden in the markers</li>
					<li>
						click on a marker to see more info about your friend
					</li>
				</ul>
			</article> */}
			<section className="map-page__container">
				{userName ? <p>welcome {userName}</p> : null}
				{/* <FriendList /> */}

				{/* <Inbox /> */}

				{loggedIn ? (
					<Map
						userName={userName}
						users={users}
						loggedIn={loggedIn}
					/>
				) : (
					<h2>Please log in to continue</h2>
				)}
				{showModal && <FriendCard />}
			</section>
		</main>
	);
};

export default MapPage;
