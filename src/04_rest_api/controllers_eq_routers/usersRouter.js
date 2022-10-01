const express = require('express');

// api: user/*
export class UsersRouter {
    constructor(config) {
        if (!config)
            throw Error("Config not defined!");

        this.config = config;
        this.userService = this.config.getUserService();
        if (!this.userService)
            throw Error("User Service is not found!");
    }

    build() {
        this.router = express.Router();
        this.router.route("/")
            .get(async (req, res, next) => {
                var users = await this.userService.getAsync();
                res.json(users);
            });
        return this.router;
    }
}
