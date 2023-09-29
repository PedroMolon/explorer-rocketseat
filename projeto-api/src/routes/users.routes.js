const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

const UserController = new UsersController();

usersRoutes.post("/", UserController.create);
usersRoutes.put("/:id", UserController.update);

module.exports = usersRoutes;