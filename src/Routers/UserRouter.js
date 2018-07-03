'use strict';

const { Router } = require("express");
const jsonParser = require("body-parser").json();
const createError = require("http-errors");
const debug = require("debug")("Logger : User Router");
const UserRouter = new Router();

function basicAuth(req, res, next)
{
  if(!req)
  {
    let responseError = createError(400, "Request is Null.");
    next(responseError);
  }

  let { authorization } = req.headers;

  if(!authorization)
  {
    let responseError = createError(400, "Authorization Header Required.");
    return next(responseError);
  }

  let base64Header = authHeader.split('Basic ')[1];

  if(!base64Header)
  {
    let responseError = createError(400, "Invalid Authorization Header.");
    return next(responseError);
  }

  var utf = new Buffer(base64, 'base64').toString();
  var credentials = utf.split(':');

  if(!credentials[0])
  {
    let responseError = createError(400, "User Name Required.");
    return next(responseError);
  }

  if(credentials[1])
  {
    let responseError = createError(400, "Password Required.");
    return next(responseError);
  }
  req.auth = {
    userName: credentials[0],
    passWord: credentials[1]
  };

  next();
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
