import axios from "axios";

export const getFriendsData = async (loggedInUser) => {
	// // const userName = loggedInUser.userName;
	// console.log("userName", loggedInUser);

	const loggedInUserID = loggedInUser.id;
	console.log("loggedinuserID", loggedInUserID);
	const result = await axios
		.get(`http://localhost:8000/users/${loggedInUserID}/friends`)
		.then((result) => {
			console.log("result get friendsdata", result);
			return result;
		})
		.catch((e) => console.log("error getfriendsData", e));
	console.log("result", result);
	return result;
};

// import axios from "axios";

// export const getFriendsData = async (loggedInUser) => {
// 	// // const userName = loggedInUser.userName;
// 	// console.log("userName", loggedInUser);
// 	const result = await axios
// 		.get(`http://localhost:8000/users/`)
// 		.then((result) => {
// 			const allButLoggedInUser = result.data.filter((user) => {
// 				return user.userName !== loggedInUser.userName;
// 			});
// 			// console.log("allbutloggedinuser", allButLoggedInUser);
// 			return allButLoggedInUser;
// 		});
// 	console.log("result", result);
// 	return result;
// };
