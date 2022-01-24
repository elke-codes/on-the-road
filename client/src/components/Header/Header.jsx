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

const Header = ({ loggedInUser, setLoggedInUser }) => {
	const history = useHistory();
	const [userNameInvalid, setUserNameInvalid] = useState(false);

	const handleLogin = async (e) => {
		// console.log(e.target.userName.value);

		e.preventDefault();

		if (!e.target.userName.value) {
			return alert("please enter your username");
		}

		const user = await getUserData(e.target.userName.value);
		// console.log("user", user);
		setLoggedInUser(user);
		// history.push("/map");
	};

	const handleLogOut = () => {
		deleteLoggedInUser();
		setLoggedInUser(null);

		history.push("/");
	};

	return (
		<section className="header">
			<Link to="/">
				<img
					src={logo}
					alt="two markers connected by dots and an airplane in the middle, on the road text underneath"
					className="logo"
				/>
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
						<div className="header__left">
							<p className="header__copy">
								Welcome, {loggedInUser.userName}
							</p>
							<div className="header__container">
								{" "}
								<button className="header__button-add-friend ">
									Find friends
								</button>
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
						<input
							className="header__input"
							type="text"
							placeholder="enter your username"
							name="userName"
							// onChange={handleChange}
						/>
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
