/// --- HEADER.JSX --- ///
import "./Header.scss";
import React, { useEffect, useState } from "react";
import { Link, useHistory, Redirect, NavLink } from "react-router-dom";
import { getLoggedInUserFromStorage } from "../../utils/users/getLoggedInUserFromStorage";
import { deleteLoggedInUser } from "../../utils/users/deleteLoggedInUser";
import { setLoggedInUserIntoStorage } from "../../utils/users/setLoggedInUserIntoStorage";
import { getUserData } from "../../utils/users/getUserData";
import logo from "../../assets/images/logo3.png";
import Avatar from "../Avatar/Avatar";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";

const Header = ({ loggedInUser, setLoggedInUser }) => {
	const history = useHistory();
	const [userNameInvalid, setUserNameInvalid] = useState(false);
	const [showSearchBar, setShowSearchBar] = useState(false);
	const [showFindFriendButton, setShowFindFriendButton] = useState(true);
	const [showSearchFriendButton, setShowSearchFriendButton] = useState(false);
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
				// if (
				// 	e.response.data.message.toLowerCase().includes("password")
				// ) {
				// 	setLoginPasswordErrorMessage(e.response.data.message);
				// } else if (
				// 	e.response.data.message.toLowerCase().includes("username")
				// ) {
				// 	setLoginUserNameErrorMessage(e.response.data.message);
				// }
				console.log("error message", e.response.data.message, e);
			});

		// history.push("/map");
		setLoggedInUser(false);
		setLoginPasswordErrorMessage(false);
		setLoginUserNameErrorMessage(false);
	};

	const handleLogOut = () => {
		deleteLoggedInUser();
		setLoggedInUser(null);

		history.push("/");
	};

	const handleFindFriends = () => {
		setShowSearchBar(true);
		setShowSearchFriendButton(true);
		setShowFindFriendButton(false);
	};

	const handleSearchFriends = () => {
		setShowSearchBar(false);
		setShowSearchFriendButton(false);
		setShowFindFriendButton(true);
	};

	return (
		<section className="header">
			<Link to="/" className="header__title-link">
				<h1 className="header__title">wayward</h1>
				{/* <img
					src={logo}
					alt="two markers connected by dots and an airplane in the middle, on the road text underneath"
					className="logo"
				/> */}
			</Link>
			<nav className="header__nav">
				<NavLink
					className={"header__nav-link"}
					activeClassName={"header__nav-link--active"}
					to="/map">
					MAP
				</NavLink>
				<NavLink
					className={"header__nav-link"}
					activeClassName={"header__nav-link--active"}
					to="/chat">
					CHAT
				</NavLink>
				<NavLink
					className={"header__nav-link"}
					activeClassName={"header__nav-link--active"}
					to="/about">
					ABOUT
				</NavLink>
			</nav>
			<div className="header__logged-in">
				{loggedInUser ? (
					<>
						<div className="header__right">
							<p className="header__copy">
								Welcome, {loggedInUser.userName}
							</p>
							<div className="header__container">
								{" "}
								{showSearchBar && <SearchBar />}
								{showFindFriendButton && (
									<button
										className="header__button-add-friend "
										onClick={handleFindFriends}>
										Find friends
									</button>
								)}
								{showSearchFriendButton && (
									<button
										className="header__button-add-friend "
										onClick={handleSearchFriends}>
										Search friend!
									</button>
								)}
								<button
									className="header__button-logout "
									onClick={handleLogOut}>
									Logout
								</button>
								<Avatar />
							</div>
						</div>
					</>
				) : (
					<form className="header__login-form" onSubmit={handleLogin}>
						{/* <label className="header__input-label" htmlFor="userName">
					Username
				</label> */}
						<div className="input__wrapper">
							<input
								className="header__input"
								type="text"
								placeholder="username"
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
								placeholder="password"
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

// <section className="header">
// 		<Link to="/">
// 			{" "}
// 			<h1 className="logo">On the road...</h1>
// 		</Link>
// 		<div className="header__logged-in">
// 			{loggedInUser ? (
// 				<>
// 					{/* <Redirect to="/map" />; */}
// 					{/* <div className="header__logged-in"> */}

// 					<button className="header__button-add-friend btn btn-primary">
// 						Find friends
// 					</button>
// 					<button
// 						className="header__button-logout btn btn-primary"
// 						onClick={handleLogOut}>
// 						logout
// 					</button>
// 					<p>Welcome, {loggedInUser.userName}</p>
// 					<div className="dropdown">
// 						<div tabIndex="0">
// 							<div className="avatar header__avatar">
// 								<div className="mb-8 rounded-full w-14 h-14">
// 									<img src="http://daisyui.com/tailwind-css-component-profile-1@56w.png" />
// 								</div>
// 							</div>
// 						</div>
// 						<ul
// 							tabIndex="0"
// 							className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
// 							<li>
// 								<a>Item 1</a>
// 							</li>
// 							<li>
// 								<a>Item 2</a>
// 							</li>
// 							<li>
// 								<a>Item 3</a>
// 							</li>
// 						</ul>
// 					</div>

// 					{/* </div> */}
// 				</>
// 			) : (
// 				<form className="header__login-form" onSubmit={handleLogin}>
// 					{/* <label className="header__input-label" htmlFor="userName">
// 					Username
// 				</label> */}
// 					<input
// 						className="header__input"
// 						type="text"
// 						placeholder="enter your username"
// 						name="userName"
// 						// onChange={handleChange}
// 					/>
// 					<button
// 						type="submit"
// 						className="header__button-login btn btn-primary"
// 						// onSubmit={handleLogin}
// 					>
// 						LOGIN
// 					</button>
// 				</form>
// 			)}
// 		</div>
// 	</section>
