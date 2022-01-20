/// --- REGISTER.JSX --- ///
import "./Register.scss";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Register = ({ userName, setUserName, setLoggedIn }) => {
	// https://medium.com/p/54e87c9c6c94
	// const [lat, setLat] = useState(null);
	// const [lng, setLng] = useState(null);
	// const [city, setCity] = useState(null);
	// const [country, setCountry] = useState(null);
	let history = useHistory();

	// TODO provide the option to manually set location
	//on formsubmit
	//TO DO FORMVALIDATION
	//after formvalidation get location
	const getLocation = () => {
		if (!navigator.geolocation) {
			alert("Sorry, geolocation is not supported by your browser");
		} else {
			// wait to get lat and lng then return object with coords
			return new Promise((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						resolve({
							lat: position.coords.latitude,
							lng: position.coords.longitude
						});
					},
					() => {
						reject("Unable to retrieve your location");
					}
				);
			});
		}
	};

	const reverseGeoCodeLocation = (coords) => {
		const baseURL = "api.tomtom.com";
		const TOM_TOM_API_KEY = "LcLxH0HrljNwaNWvcZ49gAcC85wsz1ZT";
		return axios
			.get(
				`https://${baseURL}/search/2/reverseGeocode/${coords.lat},${coords.lng}
				.json?key=${TOM_TOM_API_KEY}`
			)
			.catch((error) =>
				console.log(
					"reverseGeoCodeLocation function, GET request failed",
					error
				)
			);
	};

	const postRegistration = async (e) => {
		e.preventDefault();
		//await coords to be gotten from geolocation
		const coords = await getLocation();
		console.log("from PostReg", coords);
		const reversedGeoCode = await reverseGeoCodeLocation(coords);
		console.log(
			"reversedgeocode",
			reversedGeoCode.data.addresses[0].address.municipality,
			reversedGeoCode.data.addresses[0].address.country
		);

		console.log("e.target.userName.value", e.target.userName.value);
		axios
			.post("http://localhost:8000/users/register", {
				userName: e.target.userName.value,
				firstName: e.target.firstName.value,
				lastName: e.target.lastName.value,
				email: e.target.email.value,
				lat: coords.lat,
				lng: coords.lng,
				city: reversedGeoCode.data.addresses[0].address.municipality,
				country: reversedGeoCode.data.addresses[0].address.country
			})
			.catch((err) =>
				console.log("postRegistration POST request failed", err)
			);
		setUserName(e.target.userName.value);
		setLoggedIn(true);

		history.push("/map");
		e.target.reset();
	};

	return (
		<section className="register-modal">
			<div className="register-modal__container">
				<h1 className="register-modal__title text-3xl underline">
					Register
				</h1>

				<form
					className="register-modal__form"
					// type="submit"

					onSubmit={(e) => {
						postRegistration(e);
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

// /// --- REGISTER.JSX --- ///
// import "./Register.scss";
// import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";

// const Register = ({ userName, setUserName, setLoggedIn }) => {
// 	// https://medium.com/p/54e87c9c6c94
// 	const [lat, setLat] = useState(null);
// 	const [lng, setLng] = useState(null);
// 	const [city, setCity] = useState(null);
// 	const [country, setCountry] = useState(null);
// 	let history = useHistory();

// 	// TODO provide the option to manually set location
// 	//on formsubmit
// 	//TO DO FORMVALIDATION
// 	//after formvalidation get location
// 	const getLocation = (e) => {
// 		e.preventDefault();
// 		const geoLocation = new Promise((resolve) => {
// 			if (!navigator.geolocation) {
// 				alert("Sorry, geolocation is not supported by your browser");
// 			} else {
// 				navigator.geolocation.getCurrentPosition(
// 					(position) => {
// 						setLat(position.coords.latitude);
// 						setLng(position.coords.longitude);
// 					},
// 					() => {
// 						alert("Unable to retrieve your location");
// 					}
// 				);
// 			}
// 			return lat, lng, e;
// 		});

// 		geoLocation
// 			.then((lat, lng, e) => {
// 				console.log("hello from get location");
// 				//convert lat and lon into country and city an setCity and setCountry
// 				reverseGeoCodeLocation(lat, lng);
// 			})
// 			.then(() => {
// 				postRegistration(e);
// 			});
// 		// after getting all the info and getting it converted, POST user information to backend and redirect to /map/:userID
// 	};

// 	// wait for the state to be set on lat and lng, then set city and country
// 	// useEffect((e) => {
// 	// 	reverseGeoCodeLocation();
// 	// }, [lat, lng]);

// 	const reverseGeoCodeLocation = (lat, lng) => {
// 		const baseURL = "api.tomtom.com";
// 		const TOM_TOM_API_KEY = "LcLxH0HrljNwaNWvcZ49gAcC85wsz1ZT";
// 		console.log("lat", lat);
// 		console.log("lng", lng);
// 		axios
// 			.get(
// 				`https://${baseURL}/search/2/reverseGeocode/${lat},${lng}
// 				.json?key=${TOM_TOM_API_KEY}`
// 			)
// 			.then((result) => {
// 				console.log("tom result", result);
// 				setCity(result.data.addresses[0].address.municipality);
// 				setCountry(result.data.addresses[0].address.country);
// 			})
// 			.catch((error) =>
// 				console.log(
// 					"reverseGeoCodeLocation function, GET request failed",
// 					error
// 				)
// 			);
// 	};

// 	const postRegistration = (e) => {
// 		axios
// 			.post("http://localhost:8000/users/register", {
// 				userName: e.target.userName.value,
// 				firstName: e.target.firstName.value,
// 				lastName: e.target.lastName.value,
// 				email: e.target.email.value,
// 				lat: lat,
// 				lng: lng,
// 				city: city,
// 				country: country
// 			})
// 			.then(() => {
// 				setUserName(e.target.userName.value);
// 				setLoggedIn(true);
// 			})
// 			.then((result) => {
// 				//TODO /map/:userID
// 				console.log("from post registration", result);
// 				history.push("/map");
// 			})
// 			.catch((err) =>
// 				console.log("postRegistration POST request failed", err)
// 			);
// 	};

// 	return (
// 		<section className="register-modal">
// 			<div className="register-modal__container">
// 				<h1 className="register-modal__title">Register</h1>

// 				<form
// 					className="register-modal__form"
// 					// type="submit"

// 					onSubmit={getLocation}>
// 					{/* <label htmlFor="userName"></label> */}
// 					<input
// 						className="register-modal__input"
// 						type="text"
// 						placeholder="User name"
// 						name="userName"
// 					/>
// 					{/* <label htmlFor="firstName"></label> */}
// 					<input
// 						className="register-modal__input"
// 						type="text"
// 						placeholder="First name"
// 						name="firstName"
// 					/>
// 					{/* <label htmlFor="lastName"></label> */}
// 					<input
// 						className="register-modal__input"
// 						type="text"
// 						placeholder="Last Name"
// 						name="lastName"
// 					/>
// 					{/* <label htmlFor="email"></label> */}
// 					<input
// 						className="register-modal__input"
// 						type="text"
// 						placeholder="Email"
// 						name="email"
// 					/>
// 					{/* <label htmlFor="location">location</label> */}
// 					<p className="register-modal__disclaimer">
// 						When signing up you will be asked by your browser to
// 						allow us to use your location. This is needed for our
// 						app to work.
// 					</p>
// 					<button type="submit" className="btn btn-primary">
// 						Sign up
// 					</button>
// 					{/* <Button variant="contained">Hello World</Button>{" "} */}
// 					{/* <button type="submit">Let's go!</button> */}
// 				</form>
// 			</div>
// 		</section>
// 	);
// };

// export default Register;

// /// --- REGISTER.JSX --- ///
// import "./Register.scss";
// import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";

// const Register = ({ userName, setUserName, setLoggedIn }) => {
// 	// https://medium.com/p/54e87c9c6c94
// 	const [lat, setLat] = useState(null);
// 	const [lng, setLng] = useState(null);
// 	const [city, setCity] = useState(null);
// 	const [country, setCountry] = useState(null);
// 	let history = useHistory();

// 	// TODO provide the option to manually set location
// 	//on formsubmit
// 	//TO DO FORMVALIDATION
// 	//after formvalidation get location
// 	const getLocation = (e) => {
// 		e.preventDefault();
// 		if (!navigator.geolocation) {
// 			alert("Sorry, geolocation is not supported by your browser");
// 		} else {
// 			navigator.geolocation.getCurrentPosition(
// 				(position) => {
// 					setLat(position.coords.latitude);
// 					setLng(position.coords.longitude);
// 				},
// 				() => {
// 					alert("Unable to retrieve your location");
// 				}
// 			);
// 		}

// 		// wait for the state to be set on lat and lng, then set city and country
// 		// useEffect((e) => {
// 		// 	reverseGeoCodeLocation();
// 		// }, [lat, lng]);

// 		// //convert lat and lon into country and city an setCity and setCountry
// 		reverseGeoCodeLocation();
// 		// // after getting all the info and getting it converted, POST user information to backend and redirect to /map/:userID
// 		postRegistration(e);

// 		e.target.reset();
// 	};

// 	// wait for the state to be set on lat and lng, then set city and country
// 	// useEffect((e) => {
// 	// 	reverseGeoCodeLocation();
// 	// }, [lat, lng]);

// 	const reverseGeoCodeLocation = () => {
// 		const baseURL = "api.tomtom.com";
// 		const TOM_TOM_API_KEY = "LcLxH0HrljNwaNWvcZ49gAcC85wsz1ZT";
// 		console.log("lat", lat);
// 		console.log("lng", lng);
// 		axios
// 			.get(
// 				`https://${baseURL}/search/2/reverseGeocode/${lat},${lng}
// 				.json?key=${TOM_TOM_API_KEY}`
// 			)
// 			.then((result) => {
// 				console.log("tom result", result);
// 				setCity(result.data.addresses[0].address.municipality);
// 				setCountry(result.data.addresses[0].address.country);
// 			})
// 			.catch((error) =>
// 				console.log(
// 					"reverseGeoCodeLocation function, GET request failed",
// 					error
// 				)
// 			);
// 	};

// 	const postRegistration = (e) => {
// 		axios
// 			.post("http://localhost:8000/users/register", {
// 				userName: e.target.userName.value,
// 				firstName: e.target.firstName.value,
// 				lastName: e.target.lastName.value,
// 				email: e.target.email.value,
// 				lat: lat,
// 				lng: lng,
// 				city: city,
// 				country: country
// 			})
// 			.then(() => {
// 				setUserName(e.target.userName.value);
// 				setLoggedIn(true);
// 			})
// 			.then((result) => {
// 				//TODO /map/:userID
// 				console.log("from post registration", result);
// 				history.push("/map");
// 			})
// 			.catch((err) =>
// 				console.log("postRegistration POST request failed", err)
// 			);
// 	};

// 	return (
// 		<section className="register-modal">
// 			<div className="register-modal__container">
// 				<h1 className="register-modal__title">Register</h1>

// 				<form
// 					className="register-modal__form"
// 					// type="submit"

// 					onSubmit={getLocation}>
// 					{/* <label htmlFor="userName"></label> */}
// 					<input
// 						className="register-modal__input"
// 						type="text"
// 						placeholder="User name"
// 						name="userName"
// 					/>
// 					{/* <label htmlFor="firstName"></label> */}
// 					<input
// 						className="register-modal__input"
// 						type="text"
// 						placeholder="First name"
// 						name="firstName"
// 					/>
// 					{/* <label htmlFor="lastName"></label> */}
// 					<input
// 						className="register-modal__input"
// 						type="text"
// 						placeholder="Last Name"
// 						name="lastName"
// 					/>
// 					{/* <label htmlFor="email"></label> */}
// 					<input
// 						className="register-modal__input"
// 						type="text"
// 						placeholder="Email"
// 						name="email"
// 					/>
// 					{/* <label htmlFor="location">location</label> */}
// 					<p className="register-modal__disclaimer">
// 						When signing up you will be asked by your browser to
// 						allow us to use your location. This is needed for our
// 						app to work.
// 					</p>
// 					<button type="submit" className="btn btn-primary">
// 						Sign up
// 					</button>
// 					{/* <Button variant="contained">Hello World</Button>{" "} */}
// 					{/* <button type="submit">Let's go!</button> */}
// 				</form>
// 			</div>
// 		</section>
// 	);
// };

// export default Register;
