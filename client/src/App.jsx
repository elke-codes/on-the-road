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

	return (
		<BrowserRouter>
			<Header userName={userName} setUserName={setUserName} />
			{/* userName={userName} setUserName={setUserName} */}
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/map" component={MapPage} />
				<Route
					path="/chat"
					render={() => {
						<ChatPage userName={userName} />;
					}}
				/>

				{/* // component={ChatPage} />

				//  render={(props) => <DetailsPage globalStore={globalStore} {...props} */}
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
