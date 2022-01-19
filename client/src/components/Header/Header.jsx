/// --- HEADER.JSX --- ///
import "./Header.scss";
import React, { useEffect, useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import axios from "axios";

const Header = ({ userName, setUserName, loggedIn, setLoggedIn }) => {
	useEffect(() => {
		setUserName(userName);
	}, [loggedIn]);

	const handleLogin = (e) => {
		// console.log(e.target.userName.value);
		e.preventDefault();
		if (!e.target.userName.value) {
			return alert("please enter your username");
		}
		setUserName(e.target.userName.value);
		setLoggedIn(true);

		// axios.get("http:/localhost:8000/users").then((result) => {
		// 	console.log(result.data);
		// });

		//then render Redirect to="/map"
	};

	const handleLogOut = () => {
		// setLoggedOut(true);
		setLoggedIn(false);
		//TODO redirect to home
		// let history = useHistory();
		// history.push("/");
	};

	// const handleChange = (e) => {
	// 	e.preventDefault();
	// 	setUserName(e.target.value);
	// 	console.log("username handle change", userName);
	// };

	return (
		<section className="header">
			<Link to="/">
				{" "}
				<h1 className="logo">On the road...</h1>
			</Link>
			<div className="header__login">
				{loggedIn === true ? (
					<>
						{/* <Redirect to="/map" />; */}
						<div>
							<button className="header_button-add-friend">
								Fiend friends
							</button>
							<button onClick={handleLogOut}>logout</button>
							<p>{userName}</p>
							<div className="avatar offline">
								<div className="rounded-full w-14 h-14">
									<img src="http://daisyui.com/tailwind-css-component-profile-1@56w.png" />
								</div>
							</div>
						</div>
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
							className="header__login"
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
