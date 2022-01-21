/// --- INBOX.JSX --- ///

import "./Inbox.scss";
import React from "react";
import { v4 as uuid } from "uuid";

const Inbox = ({ friendsData }) => {
	// const friends = axios.get("http://localhost:8000");
	console.log("friendsData from inbox", friendsData);
	return (
		<section className="inbox">
			<h2 className="inbox__title">Inbox</h2>
			{/* filter over people, filter out id that matches logged in id */}
			{friendsData &&
				friendsData.map((friend) => {
					return (
						// <article className="inbox__user" key={uuid()}>
						<div class="collapse border rounded-box border-base-300 collapse-arrow inbox__user">
							<input type="checkbox" />

							<div class="collapse-title text-xl font-medium inbox__user-identity">
								<div class="avatar online">
									<div class="rounded-full w-10 h-10">
										<img src="http://daisyui.com/tailwind-css-component-profile-1@40w.png" />
									</div>
								</div>
								<span className="inbox__username"></span>{" "}
								{friend.userName}
							</div>
							<div class="collapse-content">
								<p className="inbox__location">
									{friend.locations[0].city}{" "}
									{friend.locations[0].country}
								</p>
							</div>
						</div>
						/* <img
								className="inbox__image"
								src="https://placedog.net/50"
								alt=""
							/>
							<p className="inbox__name">{user.userName}</p> */
						// </article>
					);
				})}
		</section>
	);
};

export default Inbox;
