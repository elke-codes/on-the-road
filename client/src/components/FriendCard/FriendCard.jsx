/// --- FRIENDINFO.JSX --- ///

import "./FriendCard.scss";

import React from "react";

const FriendCard = () => {
	return (
		<div>
			<article className="friend-card">
				<div className="friend-card__top-container">
					<img src="" alt="" />
					<h3 className="friend-card__name">Friend Name</h3>
					<p className="friend-card__location">is in location</p>
				</div>
				<p className="friend-card__distance">We're .... km apart!</p>
				<div className="friend-card__bottom-container">
					<div className="friend-card__links">
						<a
							href="http://www.airbnb.com"
							className="friend-card__link">
							<img
								src="../../assets/images/airbnb.png"
								alt="airbnb logo"
							/>
						</a>
						<a
							href="http://www.airbnb.com"
							className="friend-card__link">
							<img src="../../assets/images/skyscanner" alt="" />
						</a>
					</div>
					<div className="friend-card__mini-map-container">
						<iframe
							id="inlineFrameExample"
							title="Inline Frame Example"
							width="300"
							height="200"
							src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"></iframe>
					</div>
				</div>
			</article>
		</div>
	);
};

export default FriendCard;
