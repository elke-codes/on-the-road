export const setLoggedInUserIntoStorage = (user) => {
	window.localStorage.setItem("user", user);
};
