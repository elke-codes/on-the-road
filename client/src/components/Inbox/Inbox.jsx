/// --- INBOX.JSX --- ///

import "./Inbox.scss";
import React from "react";

const Inbox = ({ users }) => {
	return (
		<article className="inbox">
			{/* filter over people, filter out id that matches logged in id */}
			{/* {users.map((user) => { */}
			<div className="inbox__user">
				<img
					className="inbox__image"
					src="https://placedog.net/50"
					alt=""
				/>
				<p className="inbox__name">User Name</p>
			</div>
			<div className="inbox__user">
				<img
					className="inbox__image"
					src="https://placedog.net/50"
					alt=""
				/>
				<p className="inbox__name">User Name</p>
			</div>{" "}
			<div className="inbox__user">
				<img
					className="inbox__image"
					src="https://placedog.net/50"
					alt=""
				/>
				<p className="inbox__name">User Name</p>
			</div>{" "}
			<div className="inbox__user">
				<img
					className="inbox__image"
					src="https://placedog.net/50"
					alt=""
				/>
				<p className="inbox__name">User Name</p>
			</div>{" "}
			<div className="inbox__user">
				<img
					className="inbox__image"
					src="https://placedog.net/50"
					alt=""
				/>
				<p className="inbox__name">User Name</p>
			</div>{" "}
			<div className="inbox__user">
				<img
					className="inbox__image"
					src="https://placedog.net/50"
					alt=""
				/>
				<p className="inbox__name">User Name</p>
			</div>{" "}
			<div className="inbox__user">
				<img
					className="inbox__image"
					src="https://placedog.net/50"
					alt=""
				/>
				<p className="inbox__name">User Name</p>
			</div>
			;{/* })} */}
		</article>
	);
};

export default Inbox;
