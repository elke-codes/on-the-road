export const getLoggedInUserFromStorage = () => {
	const user = window.localStorage.getItem("user");
	return user;
};
