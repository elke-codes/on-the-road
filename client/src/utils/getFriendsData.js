import axios from "axios";

export const getFriendsData = async (loggedInUser) => {
	// // const userName = loggedInUser.userName;
	// console.log("userName", loggedInUser);
	const result = await axios
		.get(`http://localhost:8000/users/`)
		.then((result) => {
			const allButLoggedInUser = result.data.filter((user) => {
				return user.userName !== loggedInUser.userName;
			});
			// console.log("allbutloggedinuser", allButLoggedInUser);
			return allButLoggedInUser;
		});
	console.log("result", result);
	return result;
};
