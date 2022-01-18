/// ---USERROUTE.JS --- ///

const express = require("express");
const fs = require("fs");
const router = express.Router();
const { v4: uuid } = require("uuid");

// -- Helper functions -- //
const readData = () => {
	const usersData = fs.readFileSync("./data/users.json");
	return JSON.parse(usersData);
};

const writeData = () => {
	// JSON.stringify takes additional parameters, that allow us to specify the amounts of white space (ie, indentation) in the file
	fs.writeFileSync("./data/users.json", JSON.stringify(usersData, null, 2));
};

//be able to send json body when post
router.use(express.json());

router.get("/", (req, res) => {
	const usersData = readData();
	console.log(usersData);
	res.status(200).json(usersData);
});

module.exports = router;
