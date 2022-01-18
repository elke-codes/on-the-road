/// --- HOMEPAGE.JSX --- ///
import "./HomePage.scss";

import React from "react";
import Register from "../../components/Register/Register";
import Map from "../../components/Map/Map";

const HomePage = () => {
	return (
		<main>
			{/* <button onClick={handleOpenRegister}>Register! </button> */}

			<Map />
			<Register />
		</main>
	);
};

export default HomePage;
