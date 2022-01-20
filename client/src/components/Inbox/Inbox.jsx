/// --- INBOX.JSX --- ///

import "./Inbox.scss";
import React from "react";

const Inbox = ({ users }) => {
	// const friends = axios.get("http://localhost:8000");
	return (
		<section className="inbox">
			<h2 className="inbox__title">Inbox</h2>
			{/* filter over people, filter out id that matches logged in id */}
			{users &&
				users.map((user) => {
					<article className="inbox__user">
						<img
							className="inbox__image"
							src="https://placedog.net/50"
							alt=""
						/>
						<p className="inbox__name">{user.userName}</p>
					</article>;
				})}
		</section>
	);
};

export default Inbox;
