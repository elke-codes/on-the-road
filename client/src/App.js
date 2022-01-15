/// --- APP.JSX --- ///

import "./App.scss";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import MapPage from "./pages/MapPage/MapPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<BrowserRouter>
			<Header />

			<Switch>
				<Route path="/" component={HomePage} />
				<Route path="/map" component={MapPage} />
				<Route path="/chat" component={ChatPage} />
			</Switch>

			<Footer />
		</BrowserRouter>
	);
}

export default App;
