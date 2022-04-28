const express = require('express');
const route = express.Router();
const jwt = require('jsonwebtoken');
const env = require('../environments');
const { users } = require('../mocks');

/**
 * POST/ token
 * @param payload - username/password
 */
route.post('/token', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });

  if (user) {
    const accessToken = jwt.sign(
      {
        username: user.username,
        role: user.role,
      },
      env.tokenSecret,
      { expiresIn: '2d' },
    );

    return res.json({
      accessToken,
    });
  }

  return res.sendStatus(401);
});

module.exports = route;
