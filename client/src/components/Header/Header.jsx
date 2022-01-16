/// --- HEADER.JSX --- ///
import "./Header.scss";
import React, { useEffect, useState } from "react";

const Header = ({ userName, setUserName, loggedIn, setLoggedIn }) => {
	// useEffect(() => {
	// 	setUserName(userName);
	// }, [loggedIn]);

	const handleLogin = (e) => {
		console.log(e.target.userName.value);
		e.preventDefault();
		setUserName(e.target.userName.value);
		setLoggedIn(true);
		console.log("username", userName, loggedIn);
	};

	// const handleChange = (e) => {
	// 	e.preventDefault();
	// 	setUserName(e.target.value);
	// 	console.log(userName);
	// };

	// useEffect({}, []);
	return (
		<section className="header">
			<h1 className="logo">On the road...</h1>
			<div className="header__login">
				{loggedIn ? (
					<p>{userName}</p>
				) : (
					<form
						className="header__login-form"
						//  onSubmit={handleLogin}
					>
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
							onSubmit={handleLogin}>
							LOGIN
						</button>
					</form>
				)}
			</div>
		</section>
	);
};

export default Header;
