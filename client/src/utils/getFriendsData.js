import axios from "axios";

export const getFriendsData = async (loggedInUser) => {
	// const userName = loggedInUser.userName;
	console.log("userName", loggedInUser);
	const result = await axios.get(`http://localhost:8000/users/`);
	console.log("getfriendsData", result);
	return result.data.filter((user) => {
		return user.userName !== loggedInUser;
	});
};
