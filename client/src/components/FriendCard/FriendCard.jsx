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
						{/* <iframe
							width="600"
							height="450"
							style="border:0"
							loading="lazy"
							// allowfullscreen
							src="https://www.google.ca/maps/place/Vancouver,+BC/@49.2577143,-123.1939434,12z/data=!3m1!4b1!4m5!3m4!1s0x548673f143a94fb3:0xbb9196ea9b81f38b!8m2!3d49.2827291!4d-123.1207375"
							// 					src="https://www.google.com/maps/embed/v1/place?key=API_KEY
							// &q=Space+Needle,Seattle+WA"
						></iframe> */}
					</div>
				</div>
			</article>
		</div>
	);
};

export default FriendCard;
