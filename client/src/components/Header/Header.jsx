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
			<div className="header__logged-in">
				{loggedIn === true ? (
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
						{/* <p>{userName}</p> */}

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
