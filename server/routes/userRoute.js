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

const writeData = (usersData) => {
	// JSON.stringify takes additional parameters, that allow us to specify the amounts of white space (ie, indentation) in the file
	fs.writeFileSync("./data/users.json", JSON.stringify(usersData, null, 2));
};

//-- be able to send json body when post
router.use(express.json());

//-- routes --//
router.get("/", (req, res) => {
	console.log("trying to get users");
	const usersData = readData();
	console.log(`got users ${usersData}`);
	// console.log(usersData);
	res.status(200).json(usersData);
});

router.post("/register", (req, res) => {
	const userData = readData();

	// .getTimezoneOffset() to get timezone to be able to say what time it is at their location
	// timezone_offset: created_at,

	const newUser = {
		userName: req.body.userName,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		id: uuid(),
		locations: [
			{
				lat: req.body.lat,
				lng: req.body.lng,
				created_at: new Date(),
				city: req.body.city,
				country: req.body.country
			}
		]
	};

	userData.push(newUser);
	writeData(userData);
	res.status(201).json(newUser);
});

module.exports = router;
