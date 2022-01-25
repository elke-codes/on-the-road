import "./HomePage.scss";

import React, { useEffect, useState } from "react";
import Register from "../../components/Register/Register";
import Map from "../../components/Map/Map";
import Hero from "../../components/Hero/Hero";
import { getLoggedInUserFromStorage } from "../../utils/users/getLoggedInUserFromStorage";
import { Link } from "react-router-dom";
import axios from "axios";
import { getUserData } from "../../utils/users/getUserData";
// import Map from "../../components/Map/Map";

const HomePage = ({ loggedInUser, setLoggedInUser }) => {
	const [register, setRegister] = useState(false);
	const [login, setLogin] = useState(false);

	const [loginPasswordErrorMessage, setLoginPasswordErrorMessage] =
		useState("");
	const [loginUserNameErrorMessage, setLoginUserNameErrorMessage] =
		useState("");

	const handleLogin = async (e) => {
		// console.log(e.target.userName.value);

		e.preventDefault();

		if (!e.target.userName.value) {
			return alert("please enter your username");
		}
		axios
			.post("http://localhost:8000/users/login", {
				userName: e.target.userName.value,
				password: e.target.password.value
			})
			.then((result) => {
				console.log("result login axios", result);

				const user = getUserData(e.target.userName.value);
				// console.log("user", user);
				return user;
			})
			.then((user) => setLoggedInUser(user))
			.catch((e) => {
				if (
					e.response.data.message.toLowerCase().includes("password")
				) {
					setLoginPasswordErrorMessage(e.response.data.message);
				} else if (
					e.response.data.message.toLowerCase().includes("username")
				) {
					setLoginUserNameErrorMessage(e.response.data.message);
				}
				console.log("error message", e.response.data.message);
			});

		setLoggedInUser(true);
	};

	return (
		<main className="homepage">
			{/* <h1 className="homepage__title">reconnect</h1> */}
			{/* <button onClick={handleOpenRegister}>Register! </button> */}
			{!register && !loggedInUser && !login && (
				<>
					<div className="homepage__buttons">
						<h1 className="homepage__title">reconnect</h1>
						<button
							className="homepage__button"
							onClick={() => setRegister(true)}>
							Register
						</button>
						<button
							className="homepage__button"
							onClick={() => setLogin(true)}>
							Login
						</button>
					</div>
					<Link to="/about" className="homepage__about">
						Tell me more!
					</Link>
				</>
			)}

			{/* <Map className="homepage__map" /> */}
			{!loggedInUser && register && (
				<Register
					setLoggedInUser={setLoggedInUser}
					className="homepage__register"
				/>
			)}

			{!loggedInUser && login && (
				<form className="header__login-form" onSubmit={handleLogin}>
					{/* <label className="header__input-label" htmlFor="userName">
					Username
				</label> */}
					<div className="input__wrapper">
						<input
							className="header__input"
							type="text"
							placeholder="enter your username"
							name="userName"
							// onChange={handleChange}
						/>
						{loginUserNameErrorMessage && (
							<p className="header__input--error">
								{loginUserNameErrorMessage}
							</p>
						)}
					</div>
					<div className="input__wrapper">
						<input
							className="header__input"
							type="password"
							placeholder="enter your password"
							name="password"
							// onChange={handleChange}
						/>
						{loginPasswordErrorMessage && (
							<p className="header__input--error">
								{loginPasswordErrorMessage}
							</p>
						)}
					</div>
					<button
						type="submit"
						className="header__button-login"
						onSubmit={handleLogin}>
						LOGIN
					</button>
				</form>
			)}

			{loggedInUser && (
				<>
					<Link to="/map" className="homepage__get-started">
						Explore where your connections are {" >"}
					</Link>
					<Link to="/chat" className="homepage__get-started">
						Chat with your friends {" >"}
					</Link>
				</>
			)}
			{/* <Hero /> */}
		</main>
	);
};

export default HomePage;
