const express = require("express");

const {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    loginUser,
} = require("../controllers/users");


const userRoutes = express.Router();

userRoutes.get("/", getUsers);

userRoutes.get("/:user_id", getUser);

userRoutes.post("/", createUser);

userRoutes.put("/:user_id", updateUser);

userRoutes.delete("/:user_id", deleteUser);

userRoutes.post("/login", loginUser);

module.exports = userRoutes;