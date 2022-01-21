/// --- APP.JSX --- ///

import "./App.scss";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import MapPage from "./pages/MapPage/MapPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { getLoggedInUserFromStorage } from "./utils/getLoggedInUserFromStorage";
import { getFriendsData } from "./utils/getFriendsData";

const App = () => {
	const [loggedInUser, setLoggedInUser] = useState();
	const [friendsData, setFriendsData] = useState([]);

	useEffect(() => {
		const user = getLoggedInUserFromStorage();
		setLoggedInUser(user);
	}, []);

	// getFriendsData
	useEffect(async () => {
		if (!loggedInUser) {
			return;
		}
		console.log("gettting friends data");
		const friends = await getFriendsData(loggedInUser);
		console.log("friends to set", friends);
		setFriendsData(friends);
		console.log("loggedinuser", loggedInUser.userName);
		// setUserPosition(
		// 	loggedInUser.locations[0].lat,
		// 	loggedInUser.locations[0].lng
		// );
		// const friendsMarkers = friends.map((friend) => friend.location);
		// setMarkers(friendsMarkers);
		// console.log("friendsmarkers", friendsMarkers);
		// renderFriendMarkers(friends);
	}, [loggedInUser]);

	return (
		<BrowserRouter>
			<Header
				loggedInUser={loggedInUser}
				setLoggedInUser={setLoggedInUser}
			/>

			<Switch>
				<Route path="/" exact>
					<HomePage
						loggedInUser={loggedInUser}
						setLoggedInUser={setLoggedInUser}
					/>
				</Route>
				<Route path="/map">
					<MapPage
						loggedInUser={loggedInUser}
						friendsData={friendsData}
					/>
				</Route>

				<Route path="/chat">
					<ChatPage
						loggedInUser={loggedInUser}
						friendsData={friendsData}
					/>
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
