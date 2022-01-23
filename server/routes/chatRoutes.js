const express = require("express");
const fs = require("fs");
const router = express.Router();
const { v4: uuid } = require("uuid");
//-- be able to send json body when post
router.use(express.json());
// -- Helper functions -- //
const readData = () => {
	const usersData = fs.readFileSync("./data/users.json");
	return JSON.parse(usersData);
};

const writeData = (usersData) => {
	// JSON.stringify takes additional parameters, that allow us to specify the amounts of white space (ie, indentation) in the file
	fs.writeFileSync("./data/users.json", JSON.stringify(usersData, null, 2));
};

router.post("", (req, res) => {
	// console.log("res", res);
	console.log("req.body", req.body);

	const users = readData();
	console.log("users", users);
	const currentUser = users.filter((user) => {
		return user.id === req.body.authorID;
	});
	// const sentTo = users.find((user)=>{
	//    user.id === req.body.receivedByID
	// })

	// console.log("currentUser",)
	// const messageList = req.body;
	// currentUser.push(messageList);
	console.log("currentUser", currentUser);
	// check if messages are already in the list, if not, add them
	return res.status(201).send("messages added... wip");
});

module.exports = router;
