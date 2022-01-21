/// --- HEADER.JSX --- ///
import "./Header.scss";
import React, { useEffect, useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { getLoggedInUserFromStorage } from "../../utils/getLoggedInUserFromStorage";
import { deleteLoggedInUser } from "../../utils/deleteLoggedInUser";
import { setLoggedInUserIntoStorage } from "../../utils/setLoggedInUserIntoStorage";

const Header = ({ loggedInUser, setLoggedInUser }) => {
	const history = useHistory();

	const handleLogin = (e) => {
		console.log(e.target.userName.value);
		console.log("handleLogin clicke");

		e.preventDefault();

		if (!e.target.userName.value) {
			return alert("please enter your username");
		}

		setLoggedInUserIntoStorage(e.target.userName.value);
		setLoggedInUser();
		history.push("/map");
	};

	const handleLogOut = () => {
		deleteLoggedInUser();
		setLoggedInUser(null);

		history.push("/");
	};

	return (
		<section className="header">
			<Link to="/">
				{" "}
				<h1 className="logo">On the road...</h1>
			</Link>
			<div className="header__logged-in">
				{loggedInUser ? (
					<>
						{/* <Redirect to="/map" />; */}
						{/* <div className="header__logged-in"> */}
						<button className="header__button-add-friend btn btn-primary">
							Find friends
						</button>
						<button
							className="header__button-logout btn btn-primary"
							onClick={handleLogOut}>
							logout
						</button>
						<p>{loggedInUser}</p>

						<div className="dropdown">
							<div tabindex="0">
								<div className="avatar header__avatar">
									<div className="mb-8 rounded-full w-14 h-14">
										<img src="http://daisyui.com/tailwind-css-component-profile-1@56w.png" />
									</div>
								</div>
							</div>
							<ul
								tabindex="0"
								className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
								<li>
									<a>Item 1</a>
								</li>
								<li>
									<a>Item 2</a>
								</li>
								<li>
									<a>Item 3</a>
								</li>
							</ul>
						</div>

						{/* </div> */}
					</>
				) : (
					<form className="header__login-form" onSubmit={handleLogin}>
						{/* <label className="header__input-label" htmlFor="userName">
						Username
					</label> */}
						<input
							className="header__input"
							type="text"
							placeholder="enter your username"
							name="userName"
							// onChange={handleChange}
						/>
						<button
							type="submit"
							className="header__button-login btn btn-primary"
							// onSubmit={handleLogin}
						>
							LOGIN
						</button>
					</form>
				)}
			</div>
		</section>
	);
};

export default Header;
