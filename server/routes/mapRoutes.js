const express = require("express");
const fs = require("fs");
const router = express.Router();

const readData = () => {
	// The readFileSync path is relative to where server.js file is
	const friendsData = fs.readFileSync("./users.json");
	return JSON.parse(friendsData);
};

// const writeFile = (friendsData) => {
// 	// JSON.stringify takes additional parameters, that allow us to specify the amounts of white space (ie, indentation) in the file
// 	fs.writeFileSync("./friends.json", JSON.stringify(friendsData, null, 2));
// };

router.get("/", (req, res) => {
	const friendsData = readData();
	//TODO filter out CURRENTUSER

	res.status(200).json(friendsData);
});
