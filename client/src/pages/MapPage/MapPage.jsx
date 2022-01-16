/// --- MAPPAGE.JSX --- ///

import "./MapPage.scss";
import React, { useState } from "react";
import FriendCard from "../../components/FriendCard/FriendCard";

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
			{showModal && <FriendCard />}

			<button onClick={handleClick}>friend 1</button>
			<button onClick={handleClick}>friend 2</button>
			<button onClick={handleClick}>friend 3</button>
			{/* <FriendList/> */}
		</main>
	);
};

export default MapPage;
