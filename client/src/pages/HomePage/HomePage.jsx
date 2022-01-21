import "./HomePage.scss";

import React, { useEffect, useState } from "react";
import Register from "../../components/Register/Register";
import Hero from "../../components/Hero/Hero";
import { getLoggedInUserFromStorage } from "../../utils/getLoggedInUserFromStorage";

// import Map from "../../components/Map/Map";

const HomePage = ({ loggedInUser, setLoggedInUser }) => {
	return (
		<main>
			{/* <button onClick={handleOpenRegister}>Register! </button> */}

			{/* <Map /> */}
			{!loggedInUser && <Register setLoggedInUser={setLoggedInUser} />}
			{/* <Hero /> */}
		</main>
	);
};

export default HomePage;
