/// --- REGISTER.JSX --- ///
import "./Register.scss";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { postRegistration } from "../../utils/forms/postRegistration";

const Register = ({ setLoggedInUser }) => {
	let history = useHistory();

	// TODO provide the option to manually set location
	//on formsubmit
	//TO DO FORMVALIDATION
	//after formvalidation get location

	return (
		<section className="register-modal">
			<div className="register-modal__container">
				<h1 className="register-modal__title text-3xl underline">
					Register
				</h1>

				<form
					className="register-modal__form"
					// type="submit"

					onSubmit={async (e) => {
						e.preventDefault();
						const user = await postRegistration(e);
						setLoggedInUser(user);
						history.push("/map");
						e.target.reset();
					}}>
					{/* <label htmlFor="userName"></label> */}
					<input
						className="register-modal__input"
						type="text"
						placeholder="User name"
						name="userName"
					/>
					{/* <label htmlFor="firstName"></label> */}
					<input
						className="register-modal__input"
						type="text"
						placeholder="First name"
						name="firstName"
					/>
					{/* <label htmlFor="lastName"></label> */}
					<input
						className="register-modal__input"
						type="text"
						placeholder="Last Name"
						name="lastName"
					/>
					{/* <label htmlFor="email"></label> */}
					<input
						className="register-modal__input"
						type="text"
						placeholder="Email"
						name="email"
					/>
					{/* <label htmlFor="location">location</label> */}
					<p className="register-modal__disclaimer">
						When signing up you will be asked by your browser to
						allow us to use your location. This is needed for our
						app to work.
					</p>
					<button type="submit" className="btn btn-primary">
						Sign up
					</button>
					{/* <Button variant="contained">Hello World</Button>{" "} */}
					{/* <button type="submit">Let's go!</button> */}
				</form>
			</div>
		</section>
	);
};

export default Register;
