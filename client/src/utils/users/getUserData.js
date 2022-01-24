import axios from "axios";
import { setLoggedInUserIntoStorage } from "./setLoggedInUserIntoStorage";

export const getUserData = async (userName) => {
	const user = await axios
		.get(`http://localhost:8000/users/${userName}`)
		.catch((error) => console.log("getUserData error", error));

	console.log("getUserData", user.data);
	setLoggedInUserIntoStorage(user.data);
	return user.data;
};
