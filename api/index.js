const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

const bcryptSalt = bcrypt.genSaltSync(10);

app.use(express.json());

app.use(
	cors({
		credentials: true,
		origin: "http://192.168.254.105:5173",
	})
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
	res.json("test ok");
});

app.post("/register", async (req, res) => {
	const { name, email, password } = req.body;

	try {
		const userDoc = await User.create({
			name,
			email,
			password: bcrypt.hashSync(password, bcryptSalt),
		});
	} catch (e) {
		res.status(422).json(e);
	}
});

app.post("/login", async (req, res) => {
	const { email, password } = req.body;
	const userDoc = await User.findOne({ email });
	if (userDoc) {
		res.json("found");
	} else {
		res.json("not found");
	}
});

app.listen(4000);
