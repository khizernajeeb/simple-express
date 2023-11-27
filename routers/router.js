const express = require("express");

const {
  createUser,
  getProfile,
  getUsers,
} = require("../controllers/user-controller");

const router = new express.Router();

// User Controller

router.post("/users", createUser);
router.get("/users/me", getProfile);
router.get("/users", getUsers);

module.exports = router;
