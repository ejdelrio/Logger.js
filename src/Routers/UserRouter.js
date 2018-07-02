'use strict';

const Router = require("express").Router;
const jsonParser = require("body-parser").json();
const createError = require("http-errors");
const debug = require("debug")("Logger : User Router");
const UserRouter = new Router();

function basicAuth(req, res, next)
{

}

function signup(req, res, next)
{

}

function login(req, res, next)
{

}

UserRouter.post("/api/signup", jsonParser, signup);
UserRouter.get("/api/login", basicAuth, login);

module.exports = UserRouter;
