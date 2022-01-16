/// --- FRIENDINFO.JSX --- ///

import "./FriendCard.scss";
import skyscanner from "../../assets/images/skyscanner.png";
import airBnb from "../../assets/images/airbnb.png";

import React from "react";

const FriendCard = () => {
	return (
		// <section className="friend">
		<article className="friend-card">
			<div className="friend-card__top-container">
				<img src="" alt="" />
				<h3 className="friend-card__name">Ghinwa Yassine</h3>
				<p className="friend-card__location">is in Portugal</p>
			</div>
			<p className="friend-card__distance">
				We're{" "}
				<span className="friend-card__distance--bold">.... km </span>{" "}
				apart!
			</p>
			<div className="friend-card__bottom-container">
				<div className="friend-card__mini-map-container">
					<iframe
						className="friend-card__mini-map"
						id="inlineFrameExample"
						title="Inline Frame Example"
						width="300"
						height="200"
						src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"></iframe>
				</div>
				<div className="friend-card__links">
					<a
						href="http://www.airbnb.com"
						className="friend-card__link">
						<img
							src={airBnb}
							alt="airbnb logo"
							className="friend-card__link-image"
						/>
					</a>
					<a
						href="http://www.skyscanner.com"
						className="friend-card__link">
						<img
							src={skyscanner}
							alt="skyscanner logo"
							className="friend-card__link-image"
						/>
					</a>
				</div>
			</div>
		</article>
		// </section>
	);
};

export default FriendCard;
