import "./HomePage.scss";

import React, { useEffect, useState } from "react";
import Register from "../../components/Register/Register";
import Map from "../../components/Map/Map";
import Hero from "../../components/Hero/Hero";
import { getLoggedInUserFromStorage } from "../../utils/getLoggedInUserFromStorage";
import { Link } from "react-router-dom";

// import Map from "../../components/Map/Map";

const HomePage = ({ loggedInUser, setLoggedInUser }) => {
	const [register, setRegister] = useState(false);
	return (
		<main className="homepage">
			<h1 className="homepage__title">reconnect...</h1>
			{/* <button onClick={handleOpenRegister}>Register! </button> */}
			{!register && !loggedInUser && (
				<>
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

			{loggedInUser && (
				<>
					<Link to="/map" className="homepage__get-started">
						Explore where your connections are >
					</Link>
					<Link to="/chat" className="homepage__get-started">
						Chat with your friends >
					</Link>
				</>
			)}
			{/* <Hero /> */}
		</main>
	);
};

export default HomePage;
