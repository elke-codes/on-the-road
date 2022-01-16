/// --- HEADER.JSX --- ///
import "./Header.scss";
import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "../ResponsiveAppBar";

const Header = ({ userName, setUserName }) => {
	// const [userName, setUserName] = useState("");

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
		</section>
	);
};

export default Header;
