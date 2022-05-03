const express = require('express');
const route = express.Router();
const jwt = require('jsonwebtoken');
const { refreshTokenSecret, accessTokenSecret } = require('../environments');
const { users } = require('../mocks');

/**
 * It holds refresh tokens
 */
let inMemRefreshTokens = [];

/**
 * POST /token
 * @param payload - token
 */
route.post('/token', (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.sendStatus(401);
  }

  // If the user is logged out, the refresh token will not be in the list
  if (!inMemRefreshTokens.includes(token)) {
    return res.sendStatus(403);
  }

  jwt.verify(token, refreshTokenSecret, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '20m' });

    return res.json({
      accessToken,
    });
  });
});

/**
 * POST/ login
 * @param payload - username/password
 */
route.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });

  if (user) {
    const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '20m' });
    const refreshToken = jwt.sign({ username: user.username, role: user.role }, refreshTokenSecret);

    inMemRefreshTokens.push(refreshToken);

    return res.json({
      accessToken,
      refreshToken,
    });
  }

  return res.sendStatus(401);
});

/**
 * POST /logout
 * @param payload - token
 */
route.post('/logout', (req, res) => {
  const { token } = req.body;
  inMemRefreshTokens = inMemRefreshTokens.filter((t) => t !== token);

  return res.sendStatus(200);
});

module.exports = route;
