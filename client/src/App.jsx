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

const App = () => {
	const [userName, setUserName] = useState("");
	const [currentFriend, setCurrentFriend] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);
	const [users, setUsers] = useState([]);

	const getUsers = () => {
		axios.get("http://localhost:8000/users").then((result) => {
			console.log("GET users result", result);
			setUsers(result.data);
		});
		// .catch((err) => console.log("GET faillled", err));
	};

	// if there was a log in, get the users
	useEffect(() => {
		// loggedIn &&
		getUsers();
		// console.log("logged in app", loggedIn);
	}, []);

	return (
		<BrowserRouter>
			<Header
				userName={userName}
				setUserName={setUserName}
				setLoggedIn={setLoggedIn}
				loggedIn={loggedIn}
			/>
			{/* userName={userName} setUserName={setUserName} */}
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/map">
					<MapPage
						currentFriend={currentFriend}
						setCurrentFriend={setCurrentFriend}
						loggedIn={loggedIn}
						users={users}
						// userName={userName}
					/>
				</Route>

				<Route path="/chat">
					<ChatPage
						// userName={userName}
						currentFriend={currentFriend}
						setCurrentFriend={setCurrentFriend}
						loggedIn={loggedIn}
						users={users}
					/>
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
