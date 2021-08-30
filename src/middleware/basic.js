"use strict";

const base64 = require("base-64");
const { users } = require("../models");

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    return _authError();
  }
  console.log(req.headers.authorization);
  try {
    let basic = req.headers.authorization.split(" ").pop();
    let [user, pass] = base64.decode(basic).split(":");

    req.user = await users.authenticateBasic(user, pass);
    next();
  } catch (e) {
    _authError();
  }

  function _authError() {
    res.status(403).send("Invalid Login");
  }
};
