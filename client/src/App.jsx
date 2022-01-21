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

const App = () => {
	const [loggedInUser, setLoggedInUser] = useState();

	useEffect(() => {
		const user = getLoggedInUserFromStorage();
		setLoggedInUser(user);
	});

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
					<MapPage loggedInUser={loggedInUser} />
				</Route>

				<Route path="/chat">
					<ChatPage loggedInUser={loggedInUser} />
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
