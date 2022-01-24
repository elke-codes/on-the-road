/// --- REGISTER.JSX --- ///
import "./Register.scss";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { postRegistration } from "../../utils/forms/postRegistration";

const Register = ({ setLoggedInUser, setshowRegisterModal }) => {
	const history = useHistory();

	// TODO provide the option to manually set location
	//on formsubmit
	//TO DO FORMVALIDATION
	//after formvalidation get location

	const handleSubmit = async (e) => {
		e.preventDefault();
		// try catch instead of then catch when using async await
		try {
			const user = await postRegistration(e);
			console.log(user);
			setLoggedInUser(user);
			// history.push("/map");
			e.target.reset();
		} catch (e) {
			// e.response.data is the error message, set in the server.
			// alert(e.response.data);
			console.log(e);
		}
	};

	return (
		<section className="register-modal">
			<div className="register-modal__container">
				<p
					className="register-modal__close-modal"
					onClick={() => {
						setshowRegisterModal(false);
					}}>
					X
				</p>
				<h1 className="register-modal__title ">Register</h1>

				<form
					className="register-modal__form"
					// type="submit"

					//because handle submit is an async function i have to await it when i call it here
					onSubmit={async (e) => {
						await handleSubmit(e);
					}}>
					<input
						className="register-modal__input"
						type="text"
						placeholder="User name"
						name="userName"
					/>

					<input
						className="register-modal__input"
						type="text"
						placeholder="First name"
						name="firstName"
					/>

					<input
						className="register-modal__input"
						type="text"
						placeholder="Last Name"
						name="lastName"
					/>

					<input
						className="register-modal__input"
						type="text"
						placeholder="Email"
						name="email"
					/>
					{/* <input
						type="password"
						name="password"
						placeholder="password"
					/> */}

					<div className="register-modal__permission">
						<input
							type="checkbox"
							name="locationPermission"
							value="false"
						/>
						<label
							htmlFor="locationPermission"
							className="register-modal__permission-text">
							I'd rather enter my location manually
						</label>
					</div>

					<p className="register-modal__disclaimer">
						When signing up you will be asked by your browser to
						allow us to use your location. This is needed for our
						app to work.
					</p>
					<button
						type="submit"
						className="register-modal__sign-up-button">
						Sign up
					</button>
				</form>
			</div>
		</section>
	);
};

export default Register;
