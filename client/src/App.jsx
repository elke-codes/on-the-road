/// --- APP.JSX --- ///

import "./App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import MapPage from "./pages/MapPage/MapPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

const App = () => {
	const [userName, setUserName] = useState(null);
	const [currentFriend, setCurrentFriend] = useState("");

	return (
		<BrowserRouter>
			<Header userName={userName} setUserName={setUserName} />
			{/* userName={userName} setUserName={setUserName} */}
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/map">
					<MapPage
						currentFriend={currentFriend}
						setCurrentFriend={setCurrentFriend}
						// userName={userName}
					/>
				</Route>

				<Route path="/chat">
					<ChatPage
						userName={userName}
						currentFriend={currentFriend}
						setCurrentFriend={setCurrentFriend}
					/>
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
