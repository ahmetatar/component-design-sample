const express = require('express');
const profileRoute = express.Router();
const { profiles } = require('../mocks');

/**
 * GET/ profiles
 */
profileRoute.get('profiles/', (req, res) => {
  return res.json(profiles);
});

/**
 * GET/ profiles/1
 * @param route param - profile id
 */
profileRoute.get('/:id', (req, res) => {
  const profile = profiles.find((profile) => profile.id === +req.params.id);

  if (profile) {
    return res.json(profile);
  }

  return res.sendStatus(404);
});

module.exports = profileRoute;
