import "./HomePage.scss";

import React, { useEffect, useState } from "react";
import Register from "../../components/Register/Register";
import Map from "../../components/Map/Map";
import Hero from "../../components/Hero/Hero";
import { getLoggedInUserFromStorage } from "../../utils/getLoggedInUserFromStorage";

// import Map from "../../components/Map/Map";

const HomePage = ({ loggedInUser, setLoggedInUser }) => {
	const [register, setRegister] = useState(false);
	return (
		<main className="homepage">
			{/* <button onClick={handleOpenRegister}>Register! </button> */}
			{!register && (
				<>
					<h1 className="homepage__title">reconnect...</h1>
					<div className="homepage__buttons">
						<button
							className="homepage__button"
							onClick={() => setRegister(true)}>
							Register
						</button>
						<button className="homepage__button">Login</button>
					</div>
				</>
			)}

			{/* <Map className="homepage__map" /> */}
			{!loggedInUser && register && (
				<Register
					setLoggedInUser={setLoggedInUser}
					className="homepage__register"
				/>
			)}
			{/* <Hero /> */}
		</main>
	);
};

export default HomePage;
