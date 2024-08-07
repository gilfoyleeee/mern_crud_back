const express = require("express");
const { default: mongoose } = require("mongoose");
const User = require("../models/user");

const router = express.Router();

//create user
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const userAdded = await User.create({
      name: name,
      email: email,
      age: age,
    });
    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

//get all user
router.get("/", async (req, res) => {
  try {
    const showAllUser = await User.find();
    res.status(200).json(showAllUser);
    console.log(showAllUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

//get single user
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findById({ _id: id });
    res.status(200).json(singleUser);
    console.log(singleUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

//delete a user
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findByIdAndDelete({ _id: id });
    res.status(200).json(singleUser);
    console.log(singleUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
//update user
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateUser);
    console.log(updateUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
