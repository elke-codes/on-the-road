import axios from "axios";

export const reverseGeoCodeLocation = (coords) => {
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
