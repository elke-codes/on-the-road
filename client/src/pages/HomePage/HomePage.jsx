import "./HomePage.scss";

import React from "react";
import Register from "../../components/Register/Register";
import Hero from "../../components/Hero/Hero";
// import Map from "../../components/Map/Map";

const HomePage = ({ userName, setUserName, setLoggedIn, loggedIn }) => {
	return (
		<main>
			{/* <button onClick={handleOpenRegister}>Register! </button> */}

			{/* <Map /> */}
			{!loggedIn && (
				<Register
					userName={userName}
					setUserName={setUserName}
					setLoggedIn={setLoggedIn}
				/>
			)}
			{/* <Hero /> */}
		</main>
	);
};

export default HomePage;
