import "./HomePage.scss";

import React from "react";
import Register from "../../components/Register/Register";
// import Map from "../../components/Map/Map";

const HomePage = ({ userName, setUserName, setLoggedIn }) => {
	return (
		<main>
			{/* <button onClick={handleOpenRegister}>Register! </button> */}

			{/* <Map /> */}
			<Register
				userName={userName}
				setUserName={setUserName}
				setLoggedIn={setLoggedIn}
			/>
		</main>
	);
};

export default HomePage;
