/// --- APP.JSX --- ///

import "./App.scss";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import MapPage from "./pages/MapPage/MapPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import { getLoggedInUserFromStorage } from "./utils/users/getLoggedInUserFromStorage";
import { getFriendsData } from "./utils/users/getFriendsData";
import AboutPage from "./pages/AboutPage/AboutPage";

const App = () => {
	const [loggedInUser, setLoggedInUser] = useState();
	const [friendsData, setFriendsData] = useState([]);
	const [selectedFriend, setSelectedFriend] = useState(null);
	const [room, setRoom] = useState();
	// console.log("selectedFriend", selectedFriend);

	useEffect(() => {
		const user = getLoggedInUserFromStorage();
		setLoggedInUser(user);
	}, []);

	// useEffect(() => {
	// 	console.log(selectedFriend);
	// }, [selectedFriend]);

	// getFriendsData
	useEffect(async () => {
		if (!loggedInUser) {
			return;
		}
		console.log("gettting friends data");
		const friends = await getFriendsData(loggedInUser);
		// console.log("friends to set", friends);
		setFriendsData(friends);
		// console.log("loggedinuser", loggedInUser.userName);
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
						setLoggedInUser={setLoggedInUser}
						friendsData={friendsData}
						setSelectedFriend={setSelectedFriend}
						setRoom={setRoom}
					/>
				</Route>

				<Route path="/chat">
					<ChatPage
						loggedInUser={loggedInUser}
						friendsData={friendsData}
						selectedFriend={selectedFriend}
						setSelectedFriend={setSelectedFriend}
						setRoom={setRoom}
						room={room}
					/>
				</Route>

				<Route path="/about">
					<AboutPage />
				</Route>
			</Switch>
			{/* <Footer /> */}
		</BrowserRouter>
	);
};

export default App;
