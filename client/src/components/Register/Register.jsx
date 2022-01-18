/// --- REGISTER.JSX --- ///
import "./Register.scss";
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
	const handleRegistration = (e) => {
		axios
			.post("/", {
				userName: e.target.userName.value,
				firstName: e.target.firstName.value,
				lastName: e.target.lastName.value,
				email: e.target.email.value,
				location: {
					lat: lat,
					lng: lng,
					created_on: new Date()
				}
			})
			.then((result) => {
				// redirect to map page
			});
	};
	// https://medium.com/p/54e87c9c6c94
	const [lat, setLat] = useState(null);
	const [lng, setLng] = useState(null);
	const [status, setStatus] = useState(null);

	const getLocation = () => {
		if (!navigator.geolocation) {
			setStatus("Sorry, geolocation is not supported by your browser");
		} else {
			setStatus("Locating...");
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setStatus(null);
					setLat(position.coords.latitude);
					setLng(position.coords.longitude);
				},
				() => {
					// TODO provide the option to manually set location
					setStatus("Unable to retrieve your location");
				}
			);
		}
	};

	return (
		<div>
			<h1>Register</h1>
			{/* <button onClick={getLocation}>Get Location</button> */}
			<h1>Coordinates</h1>
			<p>{status}</p>
			{lat && <p>Latitude: {lat}</p>}
			{lng && <p>Longitude: {lng}</p>}
			<form
				type="submit"
				// onSubmit={() => {
				// 	handleRegistration(e);
				// }}
			>
				<label htmlFor="userName"></label>
				<input type="text" placeholder="User name" name="userName" />
				<label htmlFor="firstName"></label>
				<input type="text" placeholder="First name" name="firstName" />
				<label htmlFor="lastName"></label>
				<input type="text" placeholder="Last Name" name="lastName" />
				<label htmlFor="email"></label>
				<input type="text" placeholder="Email" name="email" />
				<label htmlFor="location">location</label>
				<button onClick={getLocation}>get your location</button>
				<button type="submit">Let's go!</button>
			</form>
		</div>
	);
};

export default Register;
