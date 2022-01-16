/// --- HEADER.JSX --- ///
import "./Header.scss";
import React, { useState } from "react";

const Header = ({ userName, setUserName }) => {
	const handleLogin = (e) => {
		console.log(e.target.userName.value);
		e.preventDefault();
		console.log("username", userName);
	};

	const handleChange = (e) => {
		setUserName(e.target.value);
	};

	// useEffect({}, []);
	return (
		<section className="header">
			<div className="header__login">
				{userName ? (
					<p>{userName}</p>
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
							onChange={handleChange}
						/>
						<button type="submit" className="header__login">
							LOGIN
						</button>
					</form>
				)}
			</div>
		</section>
	);
};

export default Header;
