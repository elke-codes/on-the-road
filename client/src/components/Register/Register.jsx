/// --- REGISTER.JSX --- ///
import "./Register.scss";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Register = (e) => {
	// https://medium.com/p/54e87c9c6c94
	const [lat, setLat] = useState(null);
	const [lng, setLng] = useState(null);
	const [city, setCity] = useState(null);
	const [country, setCountry] = useState(null);
	let history = useHistory();

	const getLocation = (e) => {
		e.preventDefault();
		if (!navigator.geolocation) {
			alert("Sorry, geolocation is not supported by your browser");
		} else {
			navigator.geolocation.getCurrentPosition((position) => {
				setLat(position.coords.latitude);
				setLng(position.coords.longitude);
			});
		}

		reverseGeoCodeLocation();
		// TODO provide the option to manually set location
		postRegistration(e);

		e.target.reset();
	};

	const postRegistration = (e) => {
		axios
			.post("http://localhost:8000/users/register", {
				userName: e.target.userName.value,
				firstName: e.target.firstName.value,
				lastName: e.target.lastName.value,
				email: e.target.email.value,
				lat: lat,
				lng: lng,
				city: city,
				country: country
			})
			.then((result) => {
				history.push("/map");
			})
			.catch((err) => console.log(err));
	};

	const reverseGeoCodeLocation = () => {
		const baseURL = "api.tomtom.com";
		const TOM_TOM_API_KEY = "LcLxH0HrljNwaNWvcZ49gAcC85wsz1ZT";
		console.log("lat", lat);
		console.log("lng", lng);
		axios
			.get(
				`https://${baseURL}/search/2/reverseGeocode/${lat},${lng}
				.json?key=${TOM_TOM_API_KEY}`
			)
			.then((result) => {
				console.log("tom result", result);
				setCity(result.data.addresses[0].address.municipality);
				setCountry(result.data.addresses[0].address.country);
				return result.data;
			})

			.catch((error) =>
				console.log(
					"reverseGeoCodeLocation function, GET request failed",
					error
				)
			);
	};

	return (
		<section className="register-modal">
			<div className="register-modal__container">
				<h1 className="register-modal__title">Register</h1>

				<form
					className="register-modal__form"
					// type="submit"

					onSubmit={getLocation}>
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
					<button type="submit">Sign up</button>
					{/* <button type="submit">Let's go!</button> */}
				</form>
			</div>
		</section>
	);
};

export default Register;
