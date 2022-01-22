/// --- MAPPAGE.JSX --- ///

import "./MapPage.scss";
import React, { useState } from "react";
import FriendCard from "../../components/FriendCard/FriendCard";
import Map from "../../components/Map/Map";
import Inbox from "../../components/Inbox/Inbox";
import Footer from "../../components/Footer/Footer";

const MapPage = ({ loggedInUser, friendsData }) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<main className="map-page">
				{!loggedInUser && <h2>Please log in to continue</h2>}
				{loggedInUser && !showModal && (
					<>
						<button
							className="map-page__open-modal-button"
							onClick={() => {
								setShowModal(true);
							}}>
							?
						</button>
						<article className="map-page__container">
							<Map
								loggedInUser={loggedInUser}
								friendsData={friendsData}
							/>
						</article>
					</>
				)}

				{loggedInUser && showModal && (
					<>
						<article className="map-page__explanation">
							<h3 className="map-page__modal-title">
								How to use this map{" "}
								<button
									className="map-page__close-modal"
									onClick={() => {
										setShowModal(false);
									}}>
									X
								</button>
							</h3>
							<ul>
								<li>
									drag and zoom around the map to see where
									your friends are
								</li>
								<li>
									click on a marker to see more info about
									your friend
								</li>
								<li>
									click anywhere on the map to go to zoom back
									to your location
								</li>
							</ul>
						</article>
						<article className="map-page__container">
							<Map
								loggedInUser={loggedInUser}
								friendsData={friendsData}
								className="map-page__map"
							/>
						</article>
					</>
				)}
			</main>
			<Footer />
		</>
	);
};

export default MapPage;
