import axios from "axios";
export const getUserData = (userName) => {
	return axios.get(`http://localhost:8000/users/${userName}`);
};
