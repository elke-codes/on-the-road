/// ---USERROUTE.JS --- ///

const express = require("express");
const fs = require("fs");
const router = express.Router();
const { v4: uuid } = require("uuid");
const emailExists = require("../utils/validations/emailExists");
const userNameExists = require("../utils/validations/userNameExists");
const emailValid = require("../utils/validations/emailValid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

require("dotenv").config();

const SALT_ROUNDS = 8;
const JWT_SECRET = process.env.JWT_SECRET;

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
	// console.log("trying to get users");
	const usersData = readData();
	// console.log(`got users ${usersData}`);
	// console.log(usersData);
	res.status(200).json(usersData);
});

router.get("/:userName", (req, res) => {
	const userData = readData();
	// console.log("get logged in user", req.params.userName);
	const loggedInUser = userData.find((user) => {
		return user.userName === req.params.userName;
	});
	// console.log("found user", loggedInUser);
	res.status(200).json(loggedInUser);
});

router.post("/register", async (req, res) => {
	const userData = readData();

	// .getTimezoneOffset() to get timezone to be able to say what time it is at their location
	// timezone_offset: created_at,
	if (userNameExists(userData, req.body.userName)) {
		return res.status(422).json({ message: "Username already taken." });
	}

	if (emailExists(userData, req.body.email)) {
		return res
			.status(422)
			.json({ message: "Email address already taken." });
	}
	// TODO EMAIL CHARACTER VALIDATION
	if (!emailValid(req.body.email)) {
		return res.status(422).json({
			message:
				"Email address invalid. Please provide a an email that looks more like this yourname@yourcompany.com"
		});
	}

	// do something with password
	let { password } = req.body;
	console.log("password", password);
	const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
	console.log("hashed", hashedPassword);

	const newUser = {
		userName: req.body.userName,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: hashedPassword,
		id: uuid(),
		messages: [],
		friends: [],
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

router.post("/login", async (req, res) => {
	const { userName, password } = req.body;
	const users = readData();

	const user = users.find((user) => {
		//TODO add logic for when username not found to be set to front end, wich is already set up to display the error message
		return userName === user.userName;
	});

	if (!user) {
		return res.status(404).send("user not found");
	}

	const passwordValid = await bcrypt.compare(password, user.password);
	console.log("passwordvalid", passwordValid);
	if (!passwordValid) {
		return res.status(422).json({ message: "password not correct" });
	}

	res.status(200).send(passwordValid);
});

module.exports = router;
