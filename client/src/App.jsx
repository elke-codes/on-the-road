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
		axios
			.get("http://localhost:8000/users")
			.then((result) => {
				// console.log("GET users result", result);
				setUsers(result.data);
			})
			.then(() => {
				console.log(users);
			});
		// .catch((err) => console.log("getUsers GET request failed", err));
	};

	// if there was a log in, get the users
	useEffect(() => {
		console.log("from get users", userName);
		loggedIn && getUsers();
		// console.log("logged in app", );
	}, [loggedIn]);

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
				<Route path="/" exact>
					<HomePage
						userName={userName}
						setUserName={setUserName}
						setLoggedIn={setLoggedIn}
					/>
				</Route>
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
