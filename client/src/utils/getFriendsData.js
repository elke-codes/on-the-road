import axios from "axios";

export const getFriendsData = async () => {
	const result = await axios.get("http://localhost:8000/users");
	return result.data;
};
