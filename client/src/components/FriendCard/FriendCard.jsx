/// --- FRIENDINFO.JSX --- ///

import "./FriendCard.scss";
import skyscanner from "../../assets/images/skyscanner.png";
import airBnb from "../../assets/images/airbnb.png";

import React from "react";

const FriendCard = ({ friend }) => {
	return (
		// <section className="friend">
		<article className="friend-card">
			<div className="friend-card__top-container">
				<img src="" alt="" />
				<h3 className="friend-card__name">{friend.name}</h3>
				{/* https://myprojects.geoapify.com/api/Uvf0Dk1JqGJgrI0OCWvD/keys */}
				<p className="friend-card__city">{friend.locations[0].city}</p>
				<p className="friend-card__country">
					{friend.locations[0].country}
				</p>
			</div>
			<p className="friend-card__distance">
				We're{" "}
				{/* https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates */}
				<span className="friend-card__distance--bold">10,533 km </span>{" "}
				apart!
			</p>
			<p className="friend-card__distance">
				It's {/* api s for timezone...  */}
				<span className="friend-card__distance--bold">
					3:22pm{" "}
				</span>{" "}
				here
			</p>
			<div className="friend-card__bottom-container">
				{/* give classname to not show when on map */}
				{/* <div className="friend-card__mini-map-container">
					<iframe
						className="friend-card__mini-map"
						id="inlineFrameExample"
						title="Inline Frame Example"
						width="300"
						height="200"
						src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"></iframe>
				</div> */}
				{/* <div className="friend-card__links">
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
				</div> */}
			</div>
		</article>
		// </section>
	);
};

export default FriendCard;
