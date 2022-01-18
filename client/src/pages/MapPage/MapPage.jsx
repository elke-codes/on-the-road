/// --- MAPPAGE.JSX --- ///

import "./MapPage.scss";
import React, { useState } from "react";
import FriendCard from "../../components/FriendCard/FriendCard";
import Map from "../../components/Map/Map";

const MapPage = ({ userName }) => {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		console.log("clicked!");
		setShowModal(true);
	};
	return (
		<main>
			<h1>MAP PAGE</h1>
			{userName ? <p>welcome {userName}</p> : null}
			<Map userName={userName} />
			{/* <FriendList/> */}
			{showModal && <FriendCard />}
		</main>
	);
};

export default MapPage;
