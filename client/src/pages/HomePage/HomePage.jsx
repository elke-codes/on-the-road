import "./HomePage.scss";

import React, { useEffect, useState } from "react";
import Register from "../../components/Register/Register";
import Map from "../../components/Map/Map";
import Hero from "../../components/Hero/Hero";
import { getLoggedInUserFromStorage } from "../../utils/getLoggedInUserFromStorage";

// import Map from "../../components/Map/Map";

const HomePage = ({ loggedInUser, setLoggedInUser }) => {
	return (
		<main className="homepage">
			{/* <button onClick={handleOpenRegister}>Register! </button> */}
			<h1 className="homepage__title">On the road ...</h1>
			<p className="homepage__copy"></p>

			{/* <Map className="homepage__map" /> */}
			{/* {!loggedInUser && (
				<Register
					setLoggedInUser={setLoggedInUser}
					className="homepage__register"
				/>
			)} */}
			{/* <Hero /> */}
		</main>
	);
};

export default HomePage;
